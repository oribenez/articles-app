import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"
import { ICategory } from "../types/category"

const deleteCategory = async (_id: string): Promise<ICategory[]> => {
    console.log(_id)
    return axios.delete(`${Routes.categories}/${_id}`).then((res) => res.data.categories)
}

const useDeleteCategory = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteCategory,
        onSuccess: (data) => {
            queryClient.setQueryData([QueryKeys.categories], data)
        }
    });
}

export default useDeleteCategory;