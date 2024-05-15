import { Request, Response } from "express";
import Category, { ICategory, TCategory } from "../database/models/category";

// NOTE:: all async and sync errors are catched with a middleware using express!

export const getCategories = async (req: Request, res: Response): Promise<void> => {
  const categories: ICategory[] = await Category.find()

  res.status(200).json({ categories });
}

export const addCategory = async (req: Request, res: Response): Promise<void> => {
  const body: TCategory = req.body;

  const category: ICategory = new Category({
    title: body.title,
    description: body.description,
  })

  const newCategory: ICategory = await category.save()
  const allCategories: ICategory[] = await Category.find()

  res.status(201).json({ message: "Category added", category: newCategory, categories: allCategories })
}

export const updateCategory = async (req: Request, res: Response): Promise<void> => {
  const {
    params: { id },
    body,
  } = req

  const updateCategory: ICategory | null = await Category.findByIdAndUpdate(
    { _id: id },
    body
  )
  const allCategories: ICategory[] = await Category.find()

  res.status(200).json({
    message: "Category updated",
    category: updateCategory,
    categories: allCategories,
  })
}

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  const deletedCategory: ICategory | null = await Category.findByIdAndDelete(
    req.params.id
  )
  const allCategories: ICategory[] = await Category.find()
  
  res.status(200).json({
    message: "Category deleted",
    category: deletedCategory,
    categories: allCategories,
  })
}


