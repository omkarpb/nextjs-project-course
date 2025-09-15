import ProductList from '@/app/components/ProductList';
import { products } from '@/app/prdocuts-data';
export default function ProductsPage() {
    return  (
        <div>
            <h1>Products</h1>
            <ProductList products={products} />
        </div>
    );
    
};
