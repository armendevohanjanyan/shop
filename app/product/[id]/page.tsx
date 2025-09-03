import Image from "next/image";
import {Metadata} from "next";
import {notFound} from "next/navigation";

async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
}

export async function generateMetadata(props: {
    params: { id: string };
}): Promise<Metadata> {
    const params = await props.params; // ✅ await params
    const { id } = params;
    const product = await getProduct(id);

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            images: [
                {
                    url: product.image, // product image from API
                    width: 600,
                    height: 600,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.description,
            images: [product.image],
        },
    };
}

export default async function ProductPage(props: { params: { id: string } }) {
    const params = await props.params; // ✅ await params
    const { id } = params;
    if (isNaN(Number(id))) {
        return notFound();
    }

    let product;
    try {
        product = await getProduct(id); // server-side fetch
    } catch {
        return notFound();
    }

    if (!product) {
        return notFound();
    }

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <Image src={product.image} alt={product.title} width={300} height={300}/>
            <p className="text-lg mt-2">${product.price}</p>
            <p className="mt-4">{product.description}</p>
            <p className="italic text-sm mt-2">Category: {product.category}</p>
        </main>
    );
}