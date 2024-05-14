import { FC } from "react";
import ArticlesList from "../components/Articles/Articles";
import useUpdateArticle from "../api/articles/useUpdateArticle";
import useDeleteArticle from "../api/articles/useDeleteArticle";
import useArticles from "../api/articles/useArticles";


const Articles: FC = () => {

    const { data: articles, isLoading: isLoadingArticles } = useArticles()
    const { mutate: updateArticle } = useUpdateArticle()
    const { mutate: deleteArticle } = useDeleteArticle()

    return <>
        <h3 style={{ margin: '0' }}>Articles</h3>
        <ArticlesList {...{ articles }} isLoading={isLoadingArticles} onUpdate={updateArticle} onDelete={deleteArticle} />
    </>
}

export default Articles
