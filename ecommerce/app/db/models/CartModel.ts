import mongoose from "mongoose";

export interface CartType extends mongoose.Document {
    userId: string,
    productIds: [string]
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const CartSchema = new mongoose.Schema<CartType>({
  userId: {
    type: String,
    required: [true, "Please provide a name for this product."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  productIds: {
    type: [String],
    required: true,
  },
});

export default mongoose.models.CartModel || mongoose.model<CartType>("CartModel", CartSchema);