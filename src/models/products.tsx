import mongoose, {model, Model, Schema} from "mongoose";

interface product extends mongoose.Document {
    productName: string;
    description: string;
    price: number;
    quantity: number;
}
const productSchema = new Schema<product>(
    {
        productName:{
            type:String, require:true, unique:true,
        },
        description:{
            type:String,
            require:true,
        },
        price:{
            type:Number,
            require:true,
        },
        quantity:{
            type:Number,
            require:true,

        }
    }
)
const Product:Model<product> = model. model<product>("Product", productSchema);

export default Product;