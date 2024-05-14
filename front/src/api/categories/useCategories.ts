import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys, Routes } from "../constants";
import { ICategory } from "../types/category";

const getCategories = async () : Promise<ICategory[]> => {
    return axios.get(Routes.categories).then((res) => res.data.categories)
}

const useCategories = () => {
    return useQuery({
        queryKey: [QueryKeys.categories],
        queryFn: getCategories
    });
}


export default useCategories;