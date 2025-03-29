import mongoose, {Model} from "mongoose";

interface Payment extends Document {
    user: mongoose.Schema.Types.ObjectId;
    order: mongoose.Schema.Types.ObjectId;
    amount: number;
    paymentMethod: string;
    status: "pending"|"completed"|"failed";

}

const paymentSchema = new mongoose.Schema<Payment>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    amount: Number,
    paymentMethod: String,
    status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" }
}, { timestamps: true });

const Payment:Model<Payment> = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
