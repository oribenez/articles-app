import express from "express";
import { getCategories, addCategory, deleteCategory, updateCategory } from "../controllers/categories";
var router = express.Router();

router.get("/", getCategories);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);


export default router;
