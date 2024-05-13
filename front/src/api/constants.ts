export const baseUrl: string = "http://localhost:8000" 

export enum QueryKeys{
    articles = 'articles'
}

export const Routes = {
    articles: baseUrl + QueryKeys.articles
}