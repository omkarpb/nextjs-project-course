// import { products } from "@/app/prdocuts-data";
import { NextRequest } from "next/server";
import CartModel from "@/app/db/models/CartModel";
import ProductModel from "@/app/db/models/ProductModel";

type Params = {
    userId: string
};

// type Cart = Record<string, string[]>;

// const carts: Cart = {
//     '1': ['prod-001', 'prod-002'],
//     '2': ['prod-003']
// };

export async function GET(request: NextRequest, { params }: { params: Params}) {
    const { userId } = await params;
    // const productIds = carts[userId] ? carts[userId] : []; 
    const cart = await CartModel.findOne({ userId });
    if (!cart) {
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    const productIds = cart.productIds;
    const cartProducts = await ProductModel.find({ _id: {$in: productIds}});
    // const cartProducts = productIds.map((id) => products.find((item) => item.id === id));
    return new Response(JSON.stringify(cartProducts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

type RequestBody = {
    productId: string,
};

export async function POST(request: NextRequest, { params }: { params: Params}) {
    const userId = params.userId;
    const body: RequestBody = await request.json();
    const cartFound = await CartModel.findOne({ userId });
    if (cartFound) {
        const productIds = cartFound.productIds;
        productIds.push(body.productId);
        await CartModel.updateOne({ userId }, { productIds });
    } else {
        await CartModel.insertOne({ userId, productIds: [body.productId] });
    }
    
    // if (carts[userId]) {
    //     carts[userId].push(body.productId)
    // } else {
    //     carts.userId = [body.productId]
    // }
    const cart = await CartModel.findOne({ userId });
    const prods = await ProductModel.find({ _id : { $in : cart.productIds }});
    return new Response(JSON.stringify(prods), {
        status: 201,
        headers: {
             'Content-Type': 'application/json'
        }
    })
}

export async function DELETE(request: NextRequest, { params }: { params: Params}) {
    const userId = params.userId;
    const body: RequestBody = await request.json();
    const cartFound = await CartModel.findOne({ userId });
    if (cartFound) {
        const ids = cartFound.productIds.filter((id) => id !== body.productId);
        await CartModel.updateOne({ userId }, { productIds: ids });
        const cart = await CartModel.findOne({ userId });
        const prods = await ProductModel.find({ _id : { $in : cart.productIds }});
        return new Response(JSON.stringify(prods), {
            status: 202,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    // if (carts[userId]) {
    //     carts[userId] = carts[userId].filter((item) => item !== body.productId);
    // } else {
    //     carts.userId = []
    // }
    return new Response(JSON.stringify([]), {
        status: 404,
        headers: {
             'Content-Type': 'application/json'
        }
    })
}