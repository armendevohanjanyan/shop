import Image, { ImageProps } from 'next/image';

type ProductImageProps = ImageProps & {
  alt: string;
};

export default function ProductImage(props: ProductImageProps) {
  return <Image {...props} />;
}
