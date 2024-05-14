import { FC } from "react";
import { ICategory } from "../../api/types/category";
import Category from "./Category";
import LoadingSpinner from "../LoadingSpinner";
import s from './Categories.module.css'


type CategoriesProps = {
    categories: ICategory[] | undefined
    isLoading: boolean
    onUpdate: any
    onDelete: any
}
const Categories: FC<CategoriesProps> = ({ categories, isLoading, onUpdate, onDelete }) => {
    return <>

        {!isLoading && categories
            ? <ul className={s.categoriesList}>
                {categories.map((category: ICategory) => {
                    return <li key={category._id}><Category {...{ category, onUpdate, onDelete }} /></li>
                })}
            </ul>
            : <LoadingSpinner />
        }
    </>
}

export default Categories;