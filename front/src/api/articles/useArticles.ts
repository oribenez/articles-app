import { useQuery } from "@tanstack/react-query";
import { TArticlePopulated } from "../types/article";
import axios from "axios";
import { QueryKeys, Routes } from "../constants";

const getArticles = async () : Promise<TArticlePopulated[]> => {
    return axios.get(Routes.articles).then((res) => res.data.articles)
}

const useArticles = () => {
    return useQuery({
        queryKey: [QueryKeys.articles],
        queryFn: getArticles
    });
}


export default useArticles;