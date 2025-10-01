import NotFoundPage from "@/app/not-found";
import Image from 'next/image';

export default async function ProductDetailPage({ params } : { params: { productId: string}}) {
    const response = await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/products/' + params.productId);
    const currentProduct = await response.json();
    // const currentProduct: Product | undefined = products.find((item: Product) => {
    //     return item.id === params.productId
    // });

    if (!currentProduct) {
        return <NotFoundPage />
    }
    return (
        <div className="flex m-8 gap-8">
            <div className="bg-white p-4 shadow-white shadow-sm rounded-sm">
                <Image src={'/' + currentProduct.imageUrl} alt="Image" width={200} height={200}/>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">{currentProduct?.name}</h1>
                <p className="text-sm">${currentProduct.price}</p>
                <h2 className="text-lg mt-4">{currentProduct?.description}</h2>
            </div>
        </div>
    );
};
