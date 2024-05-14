import { FC } from "react";
import { IArticle } from "../../api/types/article";
import Article from "./Article";
import LoadingSpinner from "../LoadingSpinner";

type ArticlesListProps = {
    articles: IArticle[] | undefined
    isLoading: boolean
    onUpdate: any
    onDelete: any
}
const Articles: FC<ArticlesListProps> = ({ articles, isLoading, onUpdate, onDelete }) => {
    console.log(!isLoading,  articles)
    return <>
    
        {!isLoading && articles
            ? articles.map((article: IArticle) => {
                return <Article key={article._id} {...{ article, onUpdate, onDelete }} />
            })
            : <LoadingSpinner />
        }
    </>
}

export default Articles;