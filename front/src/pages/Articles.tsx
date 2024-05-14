import { FC } from "react";
import s from "./Articles.module.css";
import ArticlesList from "../components/Articles/Articles";
import useUpdateArticle from "../api/articles/useUpdateArticle";
import useDeleteArticle from "../api/articles/useDeleteArticle";
import useArticles from "../api/articles/useArticles";


const Articles: FC = () => {

    const { data: articles, isLoading: isLoadingArticles } = useArticles()
    const { mutate: updateArticle } = useUpdateArticle()
    const { mutate: deleteArticle } = useDeleteArticle()

    return <>
        <h3>Articles</h3>
        <div className={s.articlesList}>
            <ArticlesList {...{ articles }} isLoading={isLoadingArticles} onUpdate={updateArticle} onDelete={deleteArticle} />
        </div>
    </>
}

export default Articles
