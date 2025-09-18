'use client';

import { useState } from "react";
import { products } from "../prdocuts-data";
import Link from "next/link";

export default function CartPage() {
    const [productIds] = useState(['prod-001', 'prod-002']);
    const cartProducts = productIds.map((id) => {
        const p = products.find((item) => item.id === id);
        return p;
    });
    return (
        <div className='m-8'>
            <h1 className='text-2xl font-bold mb-4'>Cart</h1>
            {cartProducts.map((item) => (
                <Link key={item!.id} href={`/products/${item!.id}`} className="mt-4">
                    <h1 className='text-xl font-bold mb-4'>{item?.name}</h1>
                    <p>${item!.price}</p>
                </Link>
            ))}
        </div>
    );
};
