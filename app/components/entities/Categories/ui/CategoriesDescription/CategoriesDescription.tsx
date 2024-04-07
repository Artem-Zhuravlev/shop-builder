import React, { FC } from 'react';
import Image from 'next/image';
import cls from './CategoriesDescription.module.scss';

interface CategoriesDescriptionProps {
	title: string;
}

export const CategoriesDescription: FC<CategoriesDescriptionProps> = (
	props
) => {
	const { title } = props;

	return (
		<div className={cls.CategoriesDescription}>
			<h1 className='h2'>{title}</h1>
		</div>
	);
};
