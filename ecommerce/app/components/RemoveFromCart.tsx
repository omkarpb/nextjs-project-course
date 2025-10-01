'use client';
import dynamic from 'next/dynamic'

export default function RemoveFromCart({ productId }: { productId: string}) {
    return (
        <button onClick={async (e) => {
            e.preventDefault();
            await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/cart/1', {
                method: 'DELETE',
                body: JSON.stringify({
                    productId: productId
                }),
                headers: {
                    'Cotent-Type': 'application/json'
                }
            });
        }}>
            Remove from cart
        </button>
    );
}