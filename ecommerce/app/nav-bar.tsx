import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="bg-white ">
            <ul className="flex flex-row gap-4">
                <li>
                    <Link href="/products" className="text-black">Products</Link>
                </li>
                <li>
                    <Link href="/cart" className="text-black">Cart</Link>
                </li>
                <li>
                    <Link href="/checkout" className="text-black">Checkout</Link>
                </li>
            </ul>
        </nav>
    );
};
