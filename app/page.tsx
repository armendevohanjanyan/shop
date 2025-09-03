import { Product } from '@/lib/types/product';
import { getProducts } from '@/lib/api/products';
import ProductGrid from '@/components/ProductGrid';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product: Product) => (
            <ProductGrid key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
