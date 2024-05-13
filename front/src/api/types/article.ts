import { optional, z } from "zod";

export const addArticleSchema = z
  .object({
    title: z.string().min(3, 'Title must be at least 10 characters'),
    description: z.string().min(5, 'Description must be at least 10 characters'),
    body: z.string().min(10, 'Body must be at least 10 characters'),
    category: z.string().refine(category => category !== '', {
      message: 'Please choose a category'
    }),
    tags: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).min(1, 'Choose at least one tag')
  })

export type SignUpSchemaType = z.infer<typeof addArticleSchema>;

export interface IArticle {
  _id: string
  title: string
  description: string
  body: string
  category: string
  tags: string[]
  createdAt?: string
  updatedAt?: string
}

export interface ArticleProps {
  article: IArticle
}

export type TApi = {
  message: string
  status: string
  articles: IArticle[]
  article?: IArticle
}