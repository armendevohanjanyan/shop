import { Product } from '@/lib/types/product';
import ProductImage from '@/components/ProductImage';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <ProductImage src={product.image} alt={product.title} height={300} width={300} />
      <p className="text-lg mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <p className="italic text-sm mt-2">Category: {product.category}</p>
    </div>
  );
}
