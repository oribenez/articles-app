import { FC } from "react";
import s from "./CategoryForm.module.css";
import { zodResolver } from '@hookform/resolvers/zod';
import {  useForm } from "react-hook-form";
import { AddCategorySchemaType, ICategory, addCategorySchema } from "../../api/types/category";


type CategoryFormProps = {
  onSubmit: (formData: ICategory | any) => void
  defaultValues?: {}
  isEdit?: boolean
}

const CategoryForm: FC<CategoryFormProps> = ({ onSubmit, defaultValues = {}, isEdit = false }) => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddCategorySchemaType>({
    defaultValues,
    resolver: zodResolver(addCategorySchema)
  })

  return <>
    <div className={s.topbar}>
      <h5>{isEdit ? "Update Category" : "Write new category"}</h5>
    </div>
    <form className={s.addCategory} onSubmit={handleSubmit((formData) => onSubmit({...defaultValues, ...formData}))}>

      <div>
        <input
          id='title'
          type='text'
          {...register('title')}
          placeholder="Title"
        />
        {errors.title && <span className="helperText">{errors.title.message}</span>}
      </div>

      <div>
        <textarea
          id='description'
          {...register('description')}
          placeholder="Description"
        />
        {errors.description && <span className="helperText">{errors.description.message}</span>}
      </div>


      <button className="button" type="submit">{isEdit ? "Save changes" : "Create category"}</button>
    </form>
  </>
}

export default CategoryForm;