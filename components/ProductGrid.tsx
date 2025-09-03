import StarRating from '@/components/StarRating';
import Link from 'next/link';
import { Product } from '@/lib/types/product';
import ProductImage from '@/components/ProductImage';
import ProductPrice from '@/components/ProductPrice';
import ProductTitle from '@/components/ProductTitle';

type ProductGripProps = {
  product: Product;
};

export default function ProductGrid({ product }: ProductGripProps) {
  return (
    <Link key={product.id} href={`/products/${product.id}`}>
      <ProductImage
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
      />
      <ProductTitle title={product.title} />
      <ProductPrice price={product.price} />
      <StarRating rating={product.rating.rate} />
    </Link>
  );
}
