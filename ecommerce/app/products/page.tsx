import ProductList from '@/app/components/ProductList';
// import { products } from '@/app/prdocuts-data';
export default async function ProductsPage() {
    const response = await fetch('https://glowing-waffle-7v5vppg9g9q3rv-3000.app.github.dev/api/products')
    const products = await response.json();
    return  (
        <div className='m-8'>
            <h1 className='text-2xl font-bold mb-4'>Products</h1>
            <ProductList products={products} />
        </div>
    );
    
};
