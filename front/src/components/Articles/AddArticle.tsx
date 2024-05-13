import { FC, useState } from "react";
import s from "./AddArticle.module.css";
import { FaRegSquareCheck } from "react-icons/fa6";
import useAddArticle from "../../api/articles/useAddArticle";
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ArticleProps, IArticle, SignUpSchemaType, addArticleSchema } from "../../api/types/article";
import TextInput from "../RHF/TextInput";
import { z } from "zod";
import TagsSelector from 'react-select/creatable';
import { GroupBase } from "react-select";
import { IoClose } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


type Props = {
  addArticle: (formData: IArticle | any) => void
  defaultValues?: {}
  isEdit?: boolean
}

export const CATEGORIES = {
  'HOME_REPAIR': { name: 'Home Repair' },
  'MOVING': { name: 'Moving' },
  'PETS': { name: 'Pets' },
  'PHOTOGRAPHY': { name: 'Photography' },
  'SPORTS': { name: 'Sports' },
  'TRAVEL': { name: 'Travel' },
  'ELDERLY_CARE': { name: 'Elderly Care' }
}

export type SelectOptionType = {
  value: string,
  label: string
}

const options: SelectOptionType[] = [
  { value: 'Chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'Vanilla', label: 'Vanilla' }
]

const AddArticle: FC<Props> = ({ addArticle, defaultValues={}, isEdit=false }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<SignUpSchemaType>({
    defaultValues,
    resolver: zodResolver(addArticleSchema)
  })

  // console.log(errors)
  return <>
    {!showModal

      ? <button className={`transparent ${s.btnAddArticle}`} onClick={() => setShowModal(true)}>
        <AiFillPlusCircle size={60} />
      </button>

      : <Modal open={showModal} onClose={() => setShowModal(false)} center closeOnOverlayClick={false} closeIcon={<></>}>
        <div className={s.topbar}>
          <h5>{isEdit ? "Update article" : "Write new article"}</h5>
          <button className="transparent" onClick={() => setShowModal(false)}><IoClose size={25} /></button>
        </div>
        <form className={s.addArticle} onSubmit={handleSubmit(addArticle)}>

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
              {Object.entries(CATEGORIES).map(([id, category]) => {
                return <option key={id} value={id}>{category.name}</option>
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
                <TagsSelector {...field} isMulti options={options as any} placeholder="Select tags..." />
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

          <button className="button" type="submit">Create article</button>
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
      </Modal>}

  </>
}

export default AddArticle;