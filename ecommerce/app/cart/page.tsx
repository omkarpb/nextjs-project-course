import { Product, products } from "../prdocuts-data";
import Link from "next/link";

export default async function CartPage() {
    const response = await fetch('https://glowing-waffle-7v5vppg9g9q3rv-3000.app.github.dev/api/cart/1');
    const cartProducts = await response.json();
    return (
        <div className='m-8'>
            <h1 className='text-2xl font-bold mb-4'>Cart</h1>
            {cartProducts.map((item: Product) => (
                <Link key={item!._id} href={`/products/${item!._id}`} className="mt-4">
                    <h1 className='text-xl font-bold mb-4'>{item?.name}</h1>
                    <p>${item!.price}</p>
                </Link>
            ))}
        </div>
    );
};
