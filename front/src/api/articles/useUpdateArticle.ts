import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IArticle } from "../types/article"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"

const updateArticle = async (article: IArticle): Promise<IArticle[]> => {
    return axios
        .patch(`${Routes.articles}/${article._id}`, article)
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