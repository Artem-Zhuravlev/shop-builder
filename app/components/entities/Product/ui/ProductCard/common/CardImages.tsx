import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';
import cls from '../ProductCard.module.scss';

interface CardImagesProps {
	images: { alt: string; url: string }[];
	to: string;
}

export const CardImages: FC<CardImagesProps> = (props) => {
	const { images, to } = props;

	return (
		<Link
			href={to}
			className={cls.CardImages}>
			{images &&
				images.map((item) => (
					<Image
						key={uuidv4()}
						width={300}
						height={300}
						src={item.url}
						alt={item.alt}
					/>
				))}
		</Link>
	);
};

CardImages.displayName = 'CardImages';
