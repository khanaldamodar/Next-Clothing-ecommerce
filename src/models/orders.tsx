import mongoose, {Document, Model} from "mongoose";


interface OrderedProduct {
    product: mongoose.Schema.Types.ObjectId; // Reference to Product model
    quantity: number;
}

interface Order extends Document{
    user: mongoose.Schema.Types.ObjectId;
    products: OrderedProduct[];
    totalAmount: number;
    status: "pending" | "shipped" | "delivered" | "canceled";
    paymentStatus: "pending" | "paid" | "failed";
    address?: string;

}

const orderSchema = new mongoose.Schema<Order, OrderedProduct>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{
        productName: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "shipped", "delivered", "canceled"], default: "pending" },
    paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    address: String
}, { timestamps: true });

const Order:Model<Order> = mongoose.model<Order>("Order", orderSchema);
export default  Order;