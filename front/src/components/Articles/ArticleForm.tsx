import { FC } from "react";
import s from "./ArticleForm.module.css";
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from "react-hook-form";
import { AddArticleSchemaType, IArticle, addArticleSchema } from "../../api/types/article";
import TagsSelector from 'react-select/creatable';
import useCategories from "../../api/categories/useCategories";


export type SelectOptionType = {
  value: string,
  label: string
}

// NOTE:: if you want to set a predefined tags to select from

// const options: SelectOptionType[] = [ 
//   { value: 'Hot', label: 'Hot' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'Vanilla', label: 'Vanilla' }
// ]

type ArticleFormProps = {
  onSubmit: (formData: IArticle | any) => void
  defaultValues?: {}
  isEdit?: boolean
}

const ArticleForm: FC<ArticleFormProps> = ({ onSubmit, defaultValues = {}, isEdit = false }) => {
  const { data: categories } = useCategories()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<AddArticleSchemaType>({
    defaultValues,
    resolver: zodResolver(addArticleSchema)
  })

  // console.log(errors)
  return <>
    <div className={s.topbar}>
      <h5>{isEdit ? "Update article" : "Write new article"}</h5>
    </div>
    <form className={s.addArticle} onSubmit={handleSubmit(onSubmit)}>

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
        <select id='category' {...register('category')}>
          <option value="">Category</option>
          {categories?.map((category) => {
            return <option key={category._id} value={category._id}>{category.title}</option>
          })}
        </select>
        {errors.category && <span className="helperText">{errors.category.message}</span>}
      </div>


      <div>
        <Controller
          name="tags"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TagsSelector {...field} isMulti
            //  options={options as any} 
             placeholder="Select tags..." />
          )}
        />
        {errors.tags && <span className="helperText">{errors.tags.message}</span>}
      </div>


      <div>
        <textarea
          id='description'
          {...register('description')}
          placeholder="Description"
        />
        {errors.description && <span className="helperText">{errors.description.message}</span>}
      </div>


      <div>
        <textarea
          id='body'
          {...register('body')}
          placeholder="Body"
          rows={8}
        />
        {errors.body && <span className="helperText">{errors.body.message}</span>}
      </div>

      <button className="button" type="submit">{isEdit ? "Save changes" : "Write new article"}</button>
      {/* 
<TextInput
  type="text"
  placeholder="Title"
  name="title"
  {...{ register }}
  helperText={errors.title as any}
/>

<TextInput //replace with textarea
  type="text"
  placeholder="Description"
  name="description"
  {...{ register }}
  error={errors.description}
/>

<TextInput //replace with textarea TODO:
  type="text"
  placeholder="Body"
  name="body"
  {...{ register }}
  error={errors.body}
/>

<Select
  name="category"
  {...{ register }}
  error={errors.category}
  children={<></>}
/>

<TagsSelector
  name="tags"
  {...{ register }}
  error={errors.tags}
/>
*/}

    </form>
  </>
}

export default ArticleForm;