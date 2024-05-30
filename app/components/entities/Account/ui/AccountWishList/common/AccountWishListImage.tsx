import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AccountWishListImageProps {
	image: string;
	slug: string;
	title: string;
}

export const AccountWishListImage: FC<AccountWishListImageProps> = (props) => {
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
