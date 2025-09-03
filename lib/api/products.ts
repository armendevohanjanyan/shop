import { Product } from '@/lib/types/product';

export async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 }, // RSC + ISR
  });

  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProductById(id: number | string): Promise<Product | null> {
  if (isNaN(Number(id))) return null;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  return res.json();
}
