import ProductList from '@/app/components/ProductList';
import { products } from '@/app/prdocuts-data';
export default function ProductsPage() {
    return  (
        <div className='m-8'>
            <h1 className='text-2xl font-bold mb-4'>Products</h1>
            <ProductList products={products} />
        </div>
    );
    
};
