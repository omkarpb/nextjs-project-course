import Image from "next/image";
import { Product } from "../prdocuts-data";

export default function ProductList({ products }: {products: Product[]}) {
    return (
        <>
            {products.map((item: Product) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <Image src={'/' + item.imageUrl} alt={item.name} width={200} height={200} />
                        <p>{item.price}</p>
                    </div>
                );
            })}
        </>
    );
}
