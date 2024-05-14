import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ArticleFormSchemaType, TArticlePopulated, TArticle } from "../types/article"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"

type addArticleProps = {
    article: ArticleFormSchemaType
}
const addArticle = async ({ article }: addArticleProps): Promise<TArticlePopulated[]> => {
    const newArticle: Omit<TArticle, '_id'> = {
        title: article.title,
        description: article.description,
        body: article.body,
        category: article.category,
        tags: article.tags.map(tag => ({ title: tag.label }))
    }
    return axios.post(Routes.articles, newArticle).then((res) => res.data.articles)
}

const useAddArticle = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addArticle,
        onSuccess: (data) => {
            queryClient.setQueryData([QueryKeys.articles], data)
        }
    });
}


export default useAddArticle;