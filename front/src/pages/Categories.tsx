import { FC } from "react";
import s from "./Categories.module.css";
import CategoriesList from "../components/Categories/Categories";
import useCategories from "../api/categories/useCategories";
import useUpdateCategory from "../api/categories/useUpdateCategory";
import useDeleteCategory from "../api/categories/useDeleteCategory";


const Categories: FC = () => {

    const { data: categories, isLoading: isLoadingCategories } = useCategories()
    const { mutate: updateCategory } = useUpdateCategory()
    const { mutate: deleteCategory } = useDeleteCategory()

    return <>
        <h3 style={{ margin: '0' }}>Categories</h3>
        <div className={s.categoriesList}>
            <CategoriesList {...{ categories }} isLoading={isLoadingCategories} onUpdate={updateCategory} onDelete={deleteCategory} />
        </div>
    </> 
}

export default Categories
