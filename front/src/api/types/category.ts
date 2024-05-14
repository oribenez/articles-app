import { z } from "zod";

export const addCategorySchema = z
  .object({
    title: z.string().min(2, 'Title must be at least 2 characters'),
    description: z.string().optional(),
  })

export type AddCategorySchemaType = z.infer<typeof addCategorySchema>;

export interface ICategory {
  _id: string
  title: string
  description: string
  createdAt?: string
  updatedAt?: string
}

export interface ArticleProps {
  category: ICategory
}

export type TApi = {
  message: string
  status: string
  categories: ICategory[]
  category?: ICategory
}