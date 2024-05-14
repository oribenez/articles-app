import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TArticlePopulated } from "../types/article"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"

const deleteArticle = async (_id: string): Promise<TArticlePopulated[]> => {
    return axios.delete(`${Routes.articles}/${_id}`).then((res) => res.data.articles)
}

const useDeleteArticle = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteArticle,
        onSuccess: (data) => {
            queryClient.setQueryData([QueryKeys.articles], data)
        }
    });
}

export default useDeleteArticle;