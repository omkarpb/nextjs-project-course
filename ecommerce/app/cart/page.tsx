'use client';

import { useState } from "react";
import { products } from "../prdocuts-data";
import Link from "next/link";

export default function CartPage() {
    const [productIds] = useState(['prod-001']);
    const cartProducts = productIds.map((id) => {
        const p = products.find((item) => item.id === id);
        return p;
    });
    return (
        <>
            <h1>Cart</h1>
            {cartProducts.map((item) => (
                <Link key={item!.id} href={`/products/${item!.id}`}>
                    <h1>{item?.name}</h1>
                    <p>${item!.price}</p>
                </Link>
            ))}
        </>
    );
};
