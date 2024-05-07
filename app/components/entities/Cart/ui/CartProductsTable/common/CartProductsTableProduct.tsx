import React, { FC } from 'react';
import Link from 'next/link';
import cls from '../CartProductsTable.module.scss';

export interface CartProductsTableProductProps {
	slug: string;
	title: string;
}

export const CartProductsTableProduct: FC<CartProductsTableProductProps> = (
	props
) => {
	const { slug, title } = props;

	return (
		<Link
			href={`/${slug}`}
			className={cls.CartProductsTableProduct}>
			{title}
		</Link>
	);
};
