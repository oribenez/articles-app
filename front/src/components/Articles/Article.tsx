import { FC, useState } from "react"
import s from './Article.module.css'
import { AddArticleSchemaType, IArticle } from "../../api/types/article";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "react-responsive-modal";
import ArticleForm from "./ArticleForm";
import { IoClose } from "react-icons/io5";

type ArticleProps = {
    article: IArticle
    articleInModal?: boolean
    showModalHandler?: () => void
    style?: {}
    onEdit: any
    onDelete: any
}

const Article: FC<ArticleProps> = ({ article, articleInModal, showModalHandler, style, onEdit, onDelete }) => {

    return <>
        <div {...(!articleInModal && { onClick: showModalHandler })}
            style={{ ...style, ...(!articleInModal && { cursor: 'pointer' }) }}>
            <div className={s.topbar}>
                <h3 className={s.title}>
                    {article.title}
                </h3>
            </div>
            <div>
                <p className={s.description}>{article.description}</p>
                {articleInModal && <>
                    <p className={s.body}>{article.body}</p>
                    <p className={s.category}>{article.category.title}</p>
                    <p className={s.tags}>
                        {article.tags.map((tag) => <span className={s.tag}>{tag.title}</span>)}
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


type ArticleWithModalProps = {
    status?: 'Create' | 'Edit' | 'Plain'
    article?: IArticle
    onUpdate?: any
    onCreate?: any
    onDelete?: any
    showModalCreateMode?: boolean
    onCloseModalCreateMode?: () => void
}

const ArticleWithModal: FC<ArticleWithModalProps> = ({ article, status = "Plain", onUpdate, onCreate, onDelete, showModalCreateMode, onCloseModalCreateMode }) => {
    let [showModal, setShowModal] = useState(false);
    let [currStatus, setCurrStatus] = useState(status);

    if (status === 'Create' && showModalCreateMode && onCloseModalCreateMode) {
        showModal = showModalCreateMode
        setShowModal = onCloseModalCreateMode
    } 

    // when willing to edit
    const onEditHandler = () => {
        setShowModal(prev => !prev)
        setCurrStatus('Edit')
    }
    const onUpdateHandler = (formData: IArticle) => {
        onUpdate(formData)
        setShowModal(prev => !prev)
    }
    const onCreateHandler = (formData: AddArticleSchemaType) => {
        onCreate(formData)
        setShowModal(prev => !prev)
    }

    return <>
        <Modal open={showModal} onClose={() => setShowModal(false)} center closeIcon={<></>}>
            <button className="transparent" onClick={() => setShowModal(false)} style={{ float: 'right' }}><IoClose size={25} /></button>

            {currStatus === 'Edit' && onUpdate && <ArticleForm onSubmit={onUpdateHandler} defaultValues={article} isEdit />}
            {currStatus === 'Create' && onCreate && <ArticleForm onSubmit={onCreateHandler} />}
            {currStatus === 'Plain' && (article && onUpdate && onDelete) && <Article {...{ article, onDelete }} onEdit={onEditHandler} articleInModal style={{ width: '30em' }} />}
        </Modal>
        {(article && onUpdate && onDelete) &&
            <article className="card">
                <Article {...{ article, onDelete }} showModalHandler={() => setShowModal(prev => !prev)} onEdit={onEditHandler} />
            </article>
        }
    </>;
}

export default ArticleWithModal;