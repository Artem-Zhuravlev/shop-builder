import React, { FC } from 'react';
import Image from 'next/image';
import cls from './CategoriesDescription.module.scss';

interface CategoriesDescriptionProps {
	title: string;
	image: string;
	description: string;
}

export const CategoriesDescription: FC<CategoriesDescriptionProps> = (
	props
) => {
	const { title, image, description } = props;

	return (
		<div className={cls.CategoriesDescription}>
			<h1 className='h2'>{title}</h1>
			<div className={cls.CategoriesDescriptionContent}>
				<Image
					src={image}
					alt={title}
					width={108}
					height={108}
				/>
				<p>{description}</p>
			</div>
		</div>
	);
};
