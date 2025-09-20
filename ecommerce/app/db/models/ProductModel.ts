import mongoose from "mongoose";

export interface ProductType extends mongoose.Document {
    name: string,
    imageUrl: string,
    price: number,
    description: string,
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProductSchema = new mongoose.Schema<ProductType>({
  name: {
    type: String,
    required: [true, "Please provide a name for this product."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  imageUrl: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide image url"],
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

export default mongoose.models.ProductModel || mongoose.model<ProductType>("ProductModel", ProductSchema);