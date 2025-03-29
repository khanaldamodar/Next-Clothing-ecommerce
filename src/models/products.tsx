import mongoose, {model, Model, Schema} from "mongoose";

interface product extends mongoose.Document {
    productName: string;
    description: string;
    price: number;
    quantity: number;
    category: mongoose.Schema.Types.ObjectId;
}
const productSchema = new Schema<product>(
    {
        productName:{type:String, required:true, unique:true,},
        description:{type:String, required:true,},
        price:{type:Number, required:true,}, quantity:{type:Number, require:true,},
        category: { type: mongoose.Schema.ObjectId, ref: "Category" },
    },
    {
        timestamps: true
    }
)
const Product:Model<product> = mongoose.models.Product || model<product>("Product", productSchema);
export default Product;