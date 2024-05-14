import { Document, model, Schema } from "mongoose"
import { SchemasNames } from '../constants'
const ObjectId = Schema.Types.ObjectId;


export type TCategory = {
    title: string,
    description: string,
}

export interface ICategory extends TCategory, Document { }

const categorySchema: Schema = new Schema(
    {
        title: String,
        description: String,
    },
    { timestamps: true }
) 

export default model<ICategory>(SchemasNames.Category, categorySchema)