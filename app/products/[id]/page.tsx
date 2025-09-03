import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/api/products';
import ProductCard from '@/components/ProductCard';

export async function generateMetadata(props: { params: { id: string } }): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [`/products/${params.id}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [`/products/${params.id}/opengraph-image`],
    },
  };
}

export default async function ProductPage(props: { params: { id: string } }) {
  const params = await props.params;
  const { id } = params;
  if (isNaN(Number(id))) {
    return notFound();
  }

  let product;
  try {
    product = await getProductById(id); // server-side fetch
  } catch {
    return notFound();
  }

  if (!product) {
    return notFound();
  }

  return <ProductCard product={product} />;
}
