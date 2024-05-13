import { FC, useState } from "react"
import s from './Article.module.css'
import { IArticle } from "../../api/types/article";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "react-responsive-modal";

type ArticleProps = {
    article: IArticle
    articleInModal?: boolean
    showModalHandler?: () => void
    style?: {}
    onEdit?: () => void
}

const Article: FC<ArticleProps> = ({ article, articleInModal, showModalHandler, style, onEdit }) => {

    return <>
        <div {...(!articleInModal && { onClick: showModalHandler})}
            style={{...style, ...(!articleInModal && { cursor: 'pointer' })}}>
            <div className={s.topbar}>
                <h3 className={s.title}>
                    {article.title}
                </h3>
            </div>
            <div>
                <p className={s.description}>{article.description}</p>
                {articleInModal && <>
                    <p className={s.body}>{article.body}</p>
                    <p className={s.category}>{article.category}</p>
                    <p className={s.tags}>{article.tags}</p>
                </>}
            </div>
        </div>
        <div className={s.actions}>
            <MdEdit size={25} {...{ onEdit }} />
            <MdDeleteOutline size={25} />
        </div>
    </>
}


const ArticleWithModal: FC<{ article: IArticle, isPreview?: boolean }> = ({ article }) => {
    const [showModal, setShowModal] = useState(false);

    return <>
        <Modal open={showModal} onClose={() => setShowModal(false)} center closeIcon={<></>}>
            <Article {...{ article }} articleInModal style={{ width: '30em' }} />
        </Modal>
        <div className="card">
            <Article {...{ article }} showModalHandler={() => setShowModal(true)} />
        </div>
    </>;
}

export default ArticleWithModal;