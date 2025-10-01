import Image from "next/image";
import Link from "next/link";
import { Product } from "../prdocuts-data";
import AddToCartButton from './AddToCartButton';

export default async function ProductList({ products }: {products: Product[]}) {
    // const addToCartHandler = async (e: any, productId: string) => {
    //     e.preventDefault();
    //     // const response = await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/cart/1');
    //     // const cartProducts = await response.json();

    //     await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/cart/1', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             productId
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // }
    return (
        <div className="">
            {products.map((item: Product) => {
                return (
                    <Link key={item._id} href={`/products/${item._id}`} className="flex m-8 gap-8">
                        <div className="bg-white p-4 shadow-white shadow-sm rounded-sm">
                            <Image src={'/' + item.imageUrl} alt={item.name} width={200} height={200} />
                        </div>
                        <div>
                            <h2 className="text-lg mb-4">{item.name}</h2>
                            <p>${item.price}</p>
                            <AddToCartButton productId={item._id} />
                            {/* <button onClick={(e) => addToCartHandler(e, item._id)} className="bg-amber-100 text-black p-2 mt-8 rounded-xl">Add to cart</button> */}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
