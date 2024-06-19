import Link from 'next/link';
import { FC } from 'react';
import cls from '../AccountWishList.module.scss';

interface AccountWishListProductProps {
  slug: string;
  title: string;
}

export const AccountWishListProduct: FC<AccountWishListProductProps> = (
  props,
) => {
  const { slug, title } = props;

  return (
    <Link href={`/${slug}`} className={cls.AccountWishListProduct}>
      {title}
    </Link>
  );
};
