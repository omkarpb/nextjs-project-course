import dbConnect from "@/app/db/dbConnect";
// import { products } from "@/app/prdocuts-data";
import ProductModel from "@/app/db/models/ProductModel";

export async function GET() {
    await dbConnect();
    const products = await ProductModel.find({});
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}