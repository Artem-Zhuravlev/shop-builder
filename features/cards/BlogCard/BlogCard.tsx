import React, { FC } from 'react';
import { HeadingBase } from '@/shared/HeadingBase';
import Link from 'next/link';
import cls from './BlogCard.module.scss';

interface BlogCardProps {
	to: string;
	item: {
		image: string;
		author: string;
		comments: number;
		viewed: number;
		title: string;
		published_at: string;
	};
}

export const BlogCard: FC<BlogCardProps> = (props) => {
	const {
		to,
		item: { image, author, comments = 0, viewed = 0, title, published_at },
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
			<HeadingBase level={4}>
				<Link href={to}>{title}</Link>
			</HeadingBase>
		</article>
	);
};
