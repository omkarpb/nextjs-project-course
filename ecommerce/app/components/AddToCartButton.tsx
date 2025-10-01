'use client';
import dynamic from 'next/dynamic'

export default function AddToCartButton({ productId }: { productId: string }) {
    const addToCartHandler = async (productId: string) => {
        // const response = await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/cart/1');
        // const cartProducts = await response.json();

        await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/cart/1', {
            method: 'POST',
            body: JSON.stringify({
                productId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                addToCartHandler(productId);
            }} 
            className="bg-amber-100 text-black p-2 mt-8 rounded-xl"
        >
            Add to cart
        </button>
    );
}