import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  googleId: string;
  name: string;
  email: string;
  profilePicture: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>({
  googleId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;