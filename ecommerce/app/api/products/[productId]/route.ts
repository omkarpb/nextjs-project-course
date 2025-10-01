// import { products } from "@/app/prdocuts-data";
import { NextRequest } from "next/server";
import ProductModel from "@/app/db/models/ProductModel";

// type RequestParams = {
//     productId: string
// };

export async function GET(request: NextRequest, { params }: { params: Promise<{ productId: string }>}) {
    const {productId} = await params;
    // const currentProduct = products.find((item) => item.id === productId);
    const currentProduct = await ProductModel.findOne({ _id: productId});
    if (!currentProduct) {
        return new Response('Product not found', {
            status: 404
        });
    }
    return new Response(JSON.stringify(currentProduct), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
    });
};
