import Image from 'next/image';
import Link from 'next/link';
import React, { type FC } from 'react';

interface CartProductsTableImageProps {
	image: string;
	slug: string;
	title: string;
}

export const CartProductsTableImage: FC<CartProductsTableImageProps> = (
	props,
) => {
	const { image, slug, title } = props;

	return (
		<Link href={`/${slug}`}>
			<Image src={image} alt={title} width={55} height={55} />
		</Link>
	);
};

CartProductsTableImage.displayName = 'CartProductsTableImage';
