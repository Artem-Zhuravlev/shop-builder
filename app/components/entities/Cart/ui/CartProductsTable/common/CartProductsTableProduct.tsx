import Link from 'next/link';
import type { FC } from 'react';

interface CartProductsTableProductProps {
  slug: string;
  title: string;
}

export const CartProductsTableProduct: FC<CartProductsTableProductProps> = (
  props,
) => {
  const { slug, title } = props;

  return (
    <Link href={`/${slug}`} className='link-primary'>
      {title}
    </Link>
  );
};

CartProductsTableProduct.displayName = 'CartProductsTableProduct';
