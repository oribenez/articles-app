import { FC } from "react";
import { IArticle } from "../../api/types/article";
import Article from "./Article";

const articles: IArticle[] = [
    {
        _id: '1',
        title: 'Title1',
        body: 'body1',
        category: 'category1',
        description: 'description1',
        tags: ['tags1_1', 'tags1_2']
    },
    {
        _id: '2',
        title: 'Title2',
        body: 'body2',
        category: 'category2',
        description: 'description2',
        tags: ['tags2_1', 'tags2_2']
    },
    {
        _id: '3',
        title: 'Title3',
        body: 'body3',
        category: 'category3',
        description: 'description3',
        tags: ['tags3_1', 'tags3_2']
    }
];

const ArticlesList: FC = () => {
    return <>
        {articles.map((article: IArticle) => {
            return <Article key={article._id} {...{ article }} />
        })}
    </>
}

export default ArticlesList;