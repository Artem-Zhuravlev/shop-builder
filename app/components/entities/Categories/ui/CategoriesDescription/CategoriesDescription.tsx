import React, { FC } from 'react';
import Image from 'next/image';
import cls from './CategoriesDescription.module.scss';

interface CategoriesDescriptionProps {
	description: string;
	image: string;
	title: string;
}

export const CategoriesDescription: FC<CategoriesDescriptionProps> = (
	props
) => {
	const { description, image, title } = props;

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
