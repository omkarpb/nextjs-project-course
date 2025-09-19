import { products } from "@/app/prdocuts-data";
import { NextRequest } from "next/server";


type Params = {
    userId: string
};

type Cart = Record<string, string[]>;

const carts: Cart = {
    '1': ['prod-001', 'prod-002'],
    '2': ['prod-003']
};

export async function GET(request: NextRequest, { params }: { params: Params}) {
    const userId = params.userId;
    const productIds = carts[userId] ? carts[userId] : []; 
    const cartProducts = productIds.map((id) => products.find((item) => item.id === id));
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
    if (carts[userId]) {
        carts[userId].push(body.productId)
    } else {
        carts.userId = [body.productId]
    }
    return new Response(JSON.stringify(carts[userId]), {
        status: 201,
        headers: {
             'Content-Type': 'application/json'
        }
    })
}

export async function DELETE(request: NextRequest, { params }: { params: Params}) {
     const userId = params.userId;
    const body: RequestBody = await request.json();
    if (carts[userId]) {
        carts[userId] = carts[userId].filter((item) => item !== body.productId);
    } else {
        carts.userId = []
    }
    return new Response(JSON.stringify(carts[userId]), {
        status: 201,
        headers: {
             'Content-Type': 'application/json'
        }
    })
}