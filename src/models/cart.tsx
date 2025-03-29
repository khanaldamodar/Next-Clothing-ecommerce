import mongoose, {Document, Model} from "mongoose";

interface Product extends Document{
    user:mongoose.Schema.Types.ObjectId;
    products:{
        product: mongoose.Schema.Types.ObjectId;
        quantity: number;
    }

}

const cartSchema = new mongoose.Schema<Product>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true }
    }]
});

const Cart:Model<Product> = mongoose.model("Cart", cartSchema);
export default Cart;