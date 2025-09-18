import Image from "next/image";
import Link from "next/link";
import { Product } from "../prdocuts-data";

export default function ProductList({ products }: {products: Product[]}) {
    return (
        <div className="">
            {products.map((item: Product) => {
                return (
                    <Link key={item.id} href={`/products/${item.id}`} className="flex m-8 gap-8">
                        <div className="bg-white p-4 shadow-white shadow-sm rounded-sm">
                            <Image src={'/' + item.imageUrl} alt={item.name} width={200} height={200} />
                        </div>
                        <div>
                            <h2 className="text-lg mb-4">{item.name}</h2>
                            <p>${item.price}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
