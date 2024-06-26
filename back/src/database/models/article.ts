import { Document, model, Schema } from "mongoose"
import { SchemasNames } from '../constants'
const ObjectId = Schema.Types.ObjectId;

export type TArticle = {
    title: string
    description: string
    body: string
    category: string
    tags: {
        title: string,
    }[]
}

export interface TArticlePopulated extends TArticle, Document { }

const articleSchema: Schema = new Schema(
    {
        title: String,
        description: String,
        body: String,
        category: {type: ObjectId, ref: SchemasNames.Category},
        tags: [{
            title: String,
        }]
    },
    { timestamps: true }
)

export default model<TArticlePopulated>(SchemasNames.Article, articleSchema)