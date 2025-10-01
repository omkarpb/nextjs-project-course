
import ProductList from '@/app/components/ProductList';
export const dynamic = 'force-dynamic';

// import { products } from '@/app/prdocuts-data';
export default async function ProductsPage() {
    const response = await fetch(process.env.NEXT_PULIC_SITE_URL + '/api/products')
    const products = await response.json();
    return  (
        <div className='m-8'>
            <h1 className='text-2xl font-bold mb-4'>Products</h1>
            <ProductList products={products} />
        </div>
    );
    
};
