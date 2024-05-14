import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AddArticleSchemaType, IArticle } from "../types/article"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"


const addArticle = async (article: AddArticleSchemaType) : Promise<IArticle[]> => {
    const tags = article.tags.map(tag => ({ title: tag.label }))
    const newArticle = {
        ...article,
        tags
    }
    return axios.put(Routes.articles, newArticle).then((res) => res.data.articles)
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