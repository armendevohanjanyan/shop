import Link from "next/link";
import Image from "next/image";
import {Product} from "@/lib/types/product";
import StarRating from "@/components/StarRating";

async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export default async function Home() {
    const products = await getProducts();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product: Product) => (
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <Image
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                                src={product.image} alt={product.title} width={300} height={300}/>
                            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                            <p className="mt-1 mb-1 text-lg font-medium text-gray-900">{product.price} $</p>
                            <StarRating rating={product.rating.rate} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
