import mongoose, {Schema, Model, Document} from "mongoose";
interface categoryType extends  Document{
    name: string;
    createdAt: Date;
}
const categorySchema =  new Schema<categoryType>({
    name: {
        type: String, required: true, unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})
const Category:Model<categoryType> = mongoose.models.Category || mongoose.model<categoryType>("Category", categorySchema);
export default Category;