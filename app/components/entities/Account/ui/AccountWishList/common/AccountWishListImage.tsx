import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface AccountWishListImageProps {
	image: string;
	title: string;
	slug: string;
}

export const AccountWishListImage: FC<AccountWishListImageProps> = (props) => {
	const { image, title, slug } = props;

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
