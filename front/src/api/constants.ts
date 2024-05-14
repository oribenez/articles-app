export const baseUrl: string = "http://localhost:8000" 

export enum QueryKeys{
    articles = 'articles',
    categories = 'categories'

}

export const Routes = {
    articles: `${baseUrl}/${QueryKeys.articles}`,
    categories: `${baseUrl}/${QueryKeys.categories}`
}