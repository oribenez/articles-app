import express from "express";
import { getArticles, addArticle, updateArticle, deleteArticle } from "../controllers/articles";
var router = express.Router();

router.get("/", getArticles);
router.put("/", addArticle);
router.patch("/:id", updateArticle);
router.delete("/:id", deleteArticle);


export default router;
