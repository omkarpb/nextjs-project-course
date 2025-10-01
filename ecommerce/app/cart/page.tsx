import RemoveFromCart from "../components/RemoveFromCart";
import { Product } from "../prdocuts-data";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function CartPage() {
    const response = await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/cart/1');
    const cartProducts = await response.json();
    return (
        <div className='m-8'>
            <h1 className='text-2xl font-bold mb-4'>Cart</h1>
            {cartProducts.map((item: Product) => (
                <Link key={item!._id} href={`/products/${item!._id}`} className="mt-4">
                    <h1 className='text-xl font-bold mb-4'>{item?.name}</h1>
                    <p>${item!.price}</p>
                    <RemoveFromCart productId={item._id} />
                </Link>
            ))}
        </div>
    );
};
