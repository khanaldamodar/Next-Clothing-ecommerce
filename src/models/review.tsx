
import mongoose, {Document, Model} from "mongoose";

interface Product extends  Document {
    user: mongoose.Schema.Types.ObjectId;
    product: mongoose.Schema.Types.ObjectId;
    rating: number,
    comment?: string,

}

const reviewSchema = new mongoose.Schema<Product>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String
}, { timestamps: true });

const Review:Model<Product> = mongoose.model("Review", reviewSchema);
export default  Review;