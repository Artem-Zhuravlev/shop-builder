import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface CartProductsTableImageProps {
	image: string;
	slug: string;
	title: string;
}

export const CartProductsTableImage: FC<CartProductsTableImageProps> = (
	props
) => {
	const { image, slug, title } = props;

	return (
		<Link href={`/${slug}`}>
			<Image
				src={image}
				alt={title}
				width={55}
				height={55}
			/>
		</Link>
	);
};