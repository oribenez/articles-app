import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ArticleFormSchemaType, TArticlePopulated, TArticle } from "../types/article"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"

type updateArticleProps = {
    _id: string
    article: ArticleFormSchemaType
}
const updateArticle = async ({ _id, article }: updateArticleProps): Promise<TArticlePopulated[]> => {
    const updatedArticle: TArticle = {
        _id,
        title: article.title,
        description: article.description,
        body: article.body,
        category: article.category,
        tags: article.tags.map(tag => ({ title: tag.label }))
    }
    return axios
        .patch(`${Routes.articles}/${_id}`, updatedArticle)
        .then((res) => res.data.articles)
}

const useUpdateArticle = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateArticle,
        onSuccess: (data) => {
            queryClient.setQueryData([QueryKeys.articles], data)
        }
    });
}


export default useUpdateArticle;