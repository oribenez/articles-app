import { FC, useState } from "react"
import s from './Article.module.css'
import { ArticleFormSchemaType, TArticlePopulated } from "../../api/types/article";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "react-responsive-modal";
import ArticleForm from "./ArticleForm";
import { IoClose } from "react-icons/io5";
import { formatDistance } from "date-fns";

type ArticleProps = {
    article: TArticlePopulated
    articleInModal?: boolean
    showModalHandler?: () => void
    style?: {}
    onEdit: any
    onDelete: any
}

const Article: FC<ArticleProps> = ({ article, articleInModal, showModalHandler, style, onEdit, onDelete }) => {
    const friendlyDate = article.createdAt && formatDistance(new Date(article.createdAt), new Date(), { addSuffix: true })
    return <>
        <div {...(!articleInModal && { onClick: showModalHandler })}
            style={{ ...style, ...(!articleInModal && { cursor: 'pointer' }) }}>
            <div className={s.topbar}>
                <h3 className={s.title}>{article.title}</h3>
                <span>{friendlyDate}</span>
            </div>
            <div>
                <p className={s.description}>{article.description}</p>
                {!articleInModal && <p className={s.readMore}>Read more...</p>}
                {articleInModal && <>
                    <p className={s.body}>{article.body}</p>
                    <p className={s.category}><b>Category: </b>
                        {article.category.title}
                        {article.category.description && <i style={{ color: '#aaa' }}> - {article.category.description}</i>}
                    </p>
                    <p className={s.tags}><b>Tags:</b>
                        {article.tags.map((tag, index) => <span key={tag.title + '_' + index} className={s.tag}>{tag.title}</span>)}
                    </p>
                </>}
            </div>
        </div>
        <div className={s.actions}>
            <MdEdit size={25} onClick={onEdit} />
            <MdDeleteOutline size={25} onClick={() => onDelete(article._id)} />
        </div>
    </>
}


type CreateArticleWithModalProps = {
    status: 'Create'
    onCreate: any
    showModalCreateMode: boolean
    onCloseModalCreateMode: () => void
}

type PlainArticleWithModalProps = {
    status: 'Plain'
    article: TArticlePopulated
    onDelete: any
    onUpdate: any
}

type ArticleWithModalProps = CreateArticleWithModalProps | PlainArticleWithModalProps

const ArticleWithModal: FC<ArticleWithModalProps> = (props) => {
    let [showModal, setShowModal] = useState(false);
    let [isEdit, setIsEdit] = useState(false);

    let jsxInsideModal = <></>
    let jsxOutsideModal = <></>

    if (props.status === 'Create') {
        const { onCreate, showModalCreateMode, onCloseModalCreateMode } = props
        showModal = showModalCreateMode
        setShowModal = onCloseModalCreateMode

        const onCreateHandler = (formData: ArticleFormSchemaType) => {
            onCreate(formData)
            setShowModal(prev => !prev)
        }
        jsxInsideModal = <ArticleForm onSubmit={onCreateHandler} />

    } else { // default: props.status === 'Plain'
        const { onDelete, article } = props

        // when willing to edit
        const onEditHandler = () => {
            setShowModal(true)
            setIsEdit(true)
        }

        jsxInsideModal = <Article {...{ article, onDelete }} onEdit={onEditHandler} articleInModal style={{ width: '30em' }} />

        jsxOutsideModal = <article className="card">
            <Article {...{ article, onDelete }} showModalHandler={() => setShowModal(prev => !prev)} onEdit={onEditHandler} />
        </article>
    }

    if (props.status === 'Plain' && isEdit) {
        const { onUpdate, article } = props

        const onUpdateHandler = (formData: TArticlePopulated) => {
            onUpdate(formData)
            setShowModal(prev => !prev)
            setIsEdit(false)
        }

        jsxInsideModal = <ArticleForm onSubmit={onUpdateHandler} article={article} isEdit />
    }

    return <>
        <Modal open={showModal} onClose={() => { setShowModal(false); setIsEdit(false); }} center closeIcon={<></>} animationDuration={0}>
            <button className="transparent" onClick={() => setShowModal(false)} style={{ float: 'right' }}><IoClose size={25} /></button>
            {jsxInsideModal}
        </Modal>

        {jsxOutsideModal}
    </>;
}

export default ArticleWithModal;