import React, { FC } from 'react';
import Link from 'next/link';
import { HeadingBase } from '@shared/HeadingBase';
import cls from './CategoriesSlider.module.scss';

export interface CategoriesSliderItemProps {
	title: string;
	to: string;
	image: string;
}

export const CategoriesSliderItem: FC<CategoriesSliderItemProps> = (props) => {
	const { title, to, image } = props;

	return (
		<Link
			href={to}
			className={cls.CategoriesSliderItem}>
			<img
				src={image}
				alt={title}
				className={cls.CategoriesSliderImage}
			/>
			<HeadingBase
				level={5}
				className={cls.CategoriesSliderTit}>
				{title}
			</HeadingBase>
		</Link>
	);
};
