import React, { FC } from 'react';
import Link from 'next/link';

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
			className='link-primary'>
			{title}
		</Link>
	);
};
