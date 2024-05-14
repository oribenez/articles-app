import { Request, Response } from "express";
import Article, { TArticlePopulated, TArticle } from "../database/models/article";

// NOTE:: all async and sync errors are catched with a middleware using express!

export const getArticles = async (req: Request, res: Response): Promise<void> => {
  const articles: TArticlePopulated[] = await Article.find().populate('category', '_id title description')
  console.log(articles)
  res.status(200).json({ articles });
}

export const addArticle = async (req: Request, res: Response): Promise<void> => {
  const body: TArticle = req.body;
  console.log(body)

  const article: TArticlePopulated = new Article({
    title: body.title,
    description: body.description,
    body: body.body,
    category: body.category,
    tags: body.tags
  })
  console.log(article)
  const newArticle: TArticlePopulated = await article.save()
  const allArticles: TArticlePopulated[] = await Article.find().populate('category', '_id title description')
  console.log(allArticles)
  res.status(201).json({ message: "Article added", article: newArticle, articles: allArticles })
}

export const updateArticle = async (req: Request, res: Response): Promise<void> => {
  const {
    params: { id },
    body,
  } = req

  const updateArticle: TArticlePopulated | null = await Article.findByIdAndUpdate(
    { _id: id },
    body
  )
  const allArticles: TArticlePopulated[] = await Article.find().populate('category', '_id title description')

  res.status(200).json({
    message: "Article updated",
    article: updateArticle,
    articles: allArticles,
  })
}

export const deleteArticle = async (req: Request, res: Response): Promise<void> => {
  const deletedArticle: TArticlePopulated | null = await Article.findByIdAndDelete(
    req.params.id
  )
  const allArticles: TArticlePopulated[] = await Article.find().populate('category', '_id title description')
  res.status(200).json({
    message: "Article deleted",
    article: deletedArticle,
    articles: allArticles,
  })
}


