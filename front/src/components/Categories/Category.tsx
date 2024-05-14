import { FC, useState } from "react"
import s from './Category.module.css'
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "react-responsive-modal";
import { IoClose } from "react-icons/io5";
import CategoryForm from "./CategoryForm"
import { ICategory } from "../../api/types/category";

type CategoryProps = {
    category: ICategory
    onEdit: any
    onDelete: any
}

const Category: FC<CategoryProps> = ({ category, onEdit, onDelete }) => {

    return <>
        <div>
            <h4>{category.title}</h4>
            <p>{category.description}</p>
        </div>
        <div className={s.actions}>
            <MdEdit size={25} onClick={onEdit} />
            <MdDeleteOutline size={25} onClick={() => onDelete(category._id)} />
        </div>
    </>
}


type CategoryWithModalProps = {
    status?: 'Create' | 'Edit' | 'Plain'
    category?: ICategory
    onUpdate?: any
    onCreate?: any
    onDelete?: any
    showModalCreateMode?: boolean
    onCloseModalCreateMode?: () => void
}

const CategoryWithModal: FC<CategoryWithModalProps> = ({ category, status = "Plain", onUpdate, onCreate, onDelete, showModalCreateMode, onCloseModalCreateMode }) => {
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
    const onUpdateHandler = (formData: ICategory) => {
        onUpdate(formData)
        setShowModal(prev => !prev)
    }
    const onCreateHandler = (formData: ICategory) => {
        onCreate(formData)
        setShowModal(prev => !prev)
    }

    return <>
        <Modal open={showModal} onClose={() => setShowModal(false)} center closeIcon={<></>}>
            <button className="transparent" onClick={() => setShowModal(false)} style={{ float: 'right' }}><IoClose size={25} /></button>

            {currStatus === 'Edit' && onUpdate && <CategoryForm onSubmit={onUpdateHandler} defaultValues={category} isEdit />}
            {currStatus === 'Create' && onCreate && <CategoryForm onSubmit={onCreateHandler} />}
        </Modal>
        {(category && onUpdate && onDelete) &&
            <article className="card">
                <Category {...{ category, onDelete }} onEdit={onEditHandler} />
            </article>
        }
    </>;
}

export default CategoryWithModal