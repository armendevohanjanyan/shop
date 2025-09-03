type ProductTitleProps = {
  title: string;
};

export default function ProductTitle({ title }: ProductTitleProps) {
  return <h3 className="mt-4 text-sm text-gray-700">{title}</h3>;
}
