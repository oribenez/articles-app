import { FC, useEffect } from "react";
import s from "./ArticleForm.module.css";
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from "react-hook-form";
import { ArticleFormSchemaType, TArticlePopulated, addArticleSchema } from "../../api/types/article";
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
  onSubmit: (formData: TArticlePopulated | any) => void
  article?: TArticlePopulated
  isEdit?: boolean
}

const ArticleForm: FC<ArticleFormProps> = ({ onSubmit, article, isEdit = false }) => {
  const { data: categories, isSuccess } = useCategories()
  const defaultValues: ArticleFormSchemaType | {} = article && isEdit ? {
    category: article.category._id,
    title: article.title,
    description: article.description,
    body: article.body,
    tags: 'tags' in article ? article.tags.map(tag => ({ value: tag._id, label: tag.title })) : []
  } : {}

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset
  } = useForm<ArticleFormSchemaType>({
    defaultValues,
    resolver: zodResolver(addArticleSchema)
  })

  useEffect(() => {
    reset(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  console.log('category', watch('category'))
  const onSubmitForm = (formData: ArticleFormSchemaType) => {
    onSubmit(isEdit ? { _id: article?._id, article: formData } : { article: formData })
  }
  
  // console.log(errors)
  return <>
    <div className={s.topbar}>
      <h5>{isEdit ? "Update article" : "Write new article"}</h5>
    </div>
    <form className={s.addArticle} onSubmit={handleSubmit(onSubmitForm)}>

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