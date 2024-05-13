import { Request, Response } from "express";
import Article, { IArticle, TArticle } from "../database/models/article";


export const getArticles = async (req: Request, res: Response): Promise<void> => {
  const articles: IArticle[] = await Article.find()

  res.status(200).json({ articles });
}

export const addArticle = async (req: Request, res: Response): Promise<void> => {
  const body: TArticle = req.body;

  const article: IArticle = new Article({
    title: body.title,
    description: body.description,
    body: body.body,
    category: body.category,
    tags: body.tags
  })

  const newArticle: IArticle = await article.save()
  const allArticles: IArticle[] = await Article.find()

  res.status(201).json({ message: "Article added", article: newArticle, articles: allArticles })
}

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
  const {
    params: { id },
    body,
  } = req

  const updateArticle: IArticle | null = await Article.findByIdAndUpdate(
    { _id: id },
    body
  )
  const allArticles: IArticle[] = await Article.find()

  res.status(200).json({
    message: "Article updated",
    article: updateArticle,
    articles: allArticles,
  })
}

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
  const deletedArticle: IArticle | null = await Article.findByIdAndDelete(
    req.params.id
  )
  const allArticles: IArticle[] = await Article.find()
  res.status(200).json({
    message: "Todo deleted",
    article: deletedArticle,
    articles: allArticles,
  })
}


