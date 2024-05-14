import express from "express";
import {
  getArticles,
  addArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/articles";
var router = express.Router();


router.get("/", getArticles);
router.post("/", addArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
