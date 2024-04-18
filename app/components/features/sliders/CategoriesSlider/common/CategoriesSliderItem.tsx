import React, { FC } from 'react';
import Link from 'next/link';
import cls from '../CategoriesSlider.module.scss';

export interface CategoriesSliderItemProps {
	image: string;
	title: string;
	to: string;
}

export const CategoriesSliderItem: FC<CategoriesSliderItemProps> = (props) => {
	const { image, title, to } = props;

	return (
		<Link
			href={to}
			className={cls.CategoriesSliderItem}>
			<img
				src={image}
				alt={title}
				className={cls.CategoriesSliderImage}
			/>
			<h5 className={cls.CategoriesSliderTit}>{title}</h5>
		</Link>
	);
};
