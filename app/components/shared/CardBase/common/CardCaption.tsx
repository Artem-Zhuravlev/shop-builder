import React, { FC } from 'react';
import Link from 'next/link';
import { InputRating } from '@shared/inputs/InputRating';
import { HeadingBase } from '@shared/HeadingBase';
import cls from '../CardBase.module.scss';

interface CardCaptionProps {
	to: string;
	title: string;
	rating: number;
}

export const CardCaption: FC<CardCaptionProps> = (props) => {
	const { to, title, rating } = props;

	return (
		<div className={cls.CardCaption}>
			<Link href={to}>
				<HeadingBase
					level={5}
					className={cls.CardTitle}>
					{title}
				</HeadingBase>
			</Link>
			<InputRating
				readonly
				initialValue={rating}
				size={18}
			/>
		</div>
	);
};
