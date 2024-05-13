import { Document, model, Schema } from "mongoose"
import { SchemasNames } from '../constants'
const ObjectId = Schema.Types.ObjectId;


export type TArticle = {
    title: string
    description: string
    body: string
    category: string
    tags: string[]
}

export interface IArticle extends TArticle, Document { }

const articleSchema: Schema = new Schema(
    {
        title: String,
        description: String,
        body: String,
        category: ObjectId,
        tags: [ObjectId]
    },
    { timestamps: true }
)

export default model<IArticle>(SchemasNames.Article, articleSchema)