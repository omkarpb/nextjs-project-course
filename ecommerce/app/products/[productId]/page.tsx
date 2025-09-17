import NotFoundPage from "@/app/not-found";
import { Product, products } from "@/app/prdocuts-data";

export default function ProductDetailPage({ params } : { params: { productId: string}}) {
    const currentProduct: Product | undefined = products.find((item: Product) => {
        return item.id === params.productId
    });

    if (!currentProduct) {
        return <NotFoundPage />
    }
    return (
        <>
            <h1>{currentProduct?.name}</h1>
            <h2>{currentProduct?.description}</h2>
        </>
    );
};
