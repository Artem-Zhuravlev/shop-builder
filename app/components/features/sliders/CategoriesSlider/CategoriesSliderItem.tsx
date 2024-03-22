import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cls from './CategoriesSlider.module.scss';

interface CategoriesSliderItemProps {
	to: string;
	image: string;
	title: string;
}

export const CategoriesSliderItem: FC<CategoriesSliderItemProps> = (props) => {
	const { to, image, title } = props;

	return (
		<Link
			href={to}
			className={cls.CategoriesSliderItem}>
			<figure className={cls.CategoriesSliderItemFigure}>
				<Image
					src={image}
					alt={title}
					width={200}
					height={200}
					className={cls.CategoriesSliderItemImage}
				/>
				<figcaption className={cls.CategoriesSliderItemTitle}>
					{title}
				</figcaption>
			</figure>
		</Link>
	);
};
