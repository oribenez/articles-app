import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IArticle } from "../types/article"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"

type newArticle = Omit<IArticle, "_id">

const addArticle = async (article: newArticle) : Promise<IArticle[]> => {
    console.log(article);
    return axios.put(Routes.articles, article).then((res) => res.data.articles)
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