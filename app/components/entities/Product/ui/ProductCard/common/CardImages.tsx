import React, { FC, useId } from 'react';
import Link from 'next/link';
import cls from '../ProductCard.module.scss';

interface CardImagesProps {
	to: string;
	images: Array<{
		url: string;
		alt: string;
	}>;
}

export const CardImages: FC<CardImagesProps> = ({ to, images }) => {
	const id = useId();

	return (
		<Link
			href={to}
			className={cls.CardImages}>
			{images &&
				images.map((item, index) => (
					<img
						key={`${id}-${index}`}
						height={300}
						src={item.url}
						alt={item.alt}
					/>
				))}
		</Link>
	);
};
