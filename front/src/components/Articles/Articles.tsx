import { FC } from "react";
import { TArticlePopulated } from "../../api/types/article";
import Article from "./Article";
import LoadingSpinner from "../LoadingSpinner";

type ArticlesListProps = {
    articles: TArticlePopulated[] | undefined
    isLoading: boolean
    onUpdate: any
    onDelete: any
}
const Articles: FC<ArticlesListProps> = ({ articles, isLoading, onUpdate, onDelete }) => {

    return <>
    
        {!isLoading && articles
            ? articles.map((article: TArticlePopulated) => {
                return <Article status="Plain" key={article._id} {...{ article, onDelete, onUpdate }} />
            })
            : <LoadingSpinner />
        }
    </>
}

export default Articles;