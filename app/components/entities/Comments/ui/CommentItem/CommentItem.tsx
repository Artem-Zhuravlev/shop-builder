import React, { FC } from 'react';
import Image from 'next/image';
import { IconPicture } from '@shared/icons';
import { ButtonBase } from '@shared/ButtonBase';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
	avatar?: string;
	comment: string;
	author: string;
	publishedAt: string;
}

export const CommentItem: FC<CommentItemProps> = (props) => {
	const { comment, avatar, author, publishedAt } = props;

	return (
		<article className={cls.Comment}>
			<header className={cls.CommentHeader}>
				<div className={cls.CommentAvatar}>
					{avatar ? (
						<Image
							src={avatar}
							alt={author}
							width={50}
							height={50}
						/>
					) : (
						<IconPicture />
					)}
				</div>
				<div className={cls.CommentInfo}>
					<div className={cls.CommentAuthor}>{author}</div>
					<div className={cls.CommentDate}>
						<span className='icon-clock2' />
						{new Date(publishedAt).toLocaleDateString()}
					</div>
				</div>

				<div className={cls.CommentControls}>
					<ButtonBase variant='light'>Reply</ButtonBase>
				</div>
			</header>

			<div className={cls.CommentBody}>{comment}</div>
		</article>
	);
};
