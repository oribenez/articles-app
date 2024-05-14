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
            ? categories.map((category: ICategory) => {
                return <Category key={category._id} {...{ category, onUpdate, onDelete }} />
            })
            : <LoadingSpinner />
        }
    </>
}

export default Categories;