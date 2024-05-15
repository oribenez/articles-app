import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"
import { AddCategorySchemaType, ICategory } from "../types/category"

const addCategory = async (category: AddCategorySchemaType) : Promise<ICategory[]> => {
    return axios.post(Routes.categories, category).then((res) => res.data.categories)
}

const useAddCategory = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addCategory,
        onSuccess: (data) => {
            queryClient.setQueryData([QueryKeys.categories], data)
        }
    });
}


export default useAddCategory;