import React, { FC } from 'react';
import { HeadingBase } from '@shared/HeadingBase';
import Link from 'next/link';
import cls from './BlogCard.module.scss';

export interface BlogCardProps {
	to: string;
	image: string;
	author: string;
	comments: number;
	viewed: number;
	title: string;
	published_at: string;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
	const {
		image,
		author,
		comments = 0,
		viewed = 0,
		title,
		published_at,
		to,
	} = props;

	return (
		<article className={cls.BlogCard}>
			<Link
				href={to}
				className={cls.BlogCardImage}>
				<img
					src={image}
					alt={title}
				/>
			</Link>
			<div className={cls.BlogCardDescription}>
				<div className={cls.BlogCardInfo}>
					<div className={cls.BlogCardInfoItem}>
						<span className='icon-user'></span>
						{author}
					</div>
					<div className={cls.BlogCardInfoItem}>
						<span className='icon-bubble2'></span>
						{comments}
					</div>
					<div className={cls.BlogCardInfoItem}>
						<span className='icon-eye'></span>
						{viewed}
					</div>
					<div className={cls.BlogCardInfoItem}>
						<span className='icon-eye'></span>
						{new Date(published_at).toLocaleDateString()}
					</div>
				</div>
				<HeadingBase
					level={5}
					className={cls.BlogCardTitle}>
					<Link href={to}>{title}</Link>
				</HeadingBase>
			</div>
		</article>
	);
};
