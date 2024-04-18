import React, { FC } from 'react';
import Link from 'next/link';
import { InputRating } from '@shared/inputs';
import cls from '../ProductCard.module.scss';

interface CardCaptionProps {
	rating: number;
	title: string;
	to: string;
}

export const CardCaption: FC<CardCaptionProps> = (props) => {
	const { rating, title, to } = props;

	return (
		<div className={cls.CardCaption}>
			<Link href={to}>
				<h5 className={cls.CardTitle}>{title}</h5>
			</Link>
			<InputRating
				readonly
				initialValue={rating}
				size={18}
			/>
		</div>
	);
};
