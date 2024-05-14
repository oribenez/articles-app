import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { QueryKeys, Routes } from "../constants"
import { ICategory } from "../types/category"

const updateCategory = async (category: ICategory): Promise<ICategory[]> => {
    console.log(category)
    return axios
        .patch(`${Routes.categories}/${category._id}`, category)
        .then((res) => res.data.categories)
}

const useUpdateCategory = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: updateCategory,
        onSuccess: (data) => {
            queryClient.setQueryData([QueryKeys.categories], data)
        }
    });
}


export default useUpdateCategory;