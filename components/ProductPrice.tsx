type ProductPriceProps = {
  price: number;
};

export default function ProductPrice({ price }: ProductPriceProps) {
  return <p className="mt-1 mb-1 text-lg font-medium text-gray-900">${price}</p>;
}
