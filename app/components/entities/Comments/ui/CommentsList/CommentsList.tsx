'use client';
import React, { useEffect, useState, type FC } from 'react';
import { CommentItem } from '../CommentItem/CommentItem';
import cls from './CommentsList.module.scss';

export interface Comment {
	id: number | string;
	author: string;
	comment: string;
	published_at: string;
	replied_to?: number | string;
	related_to?: number | string;
	reply_to?: string;
	nestedComments?: Comment[];
	avatar?: string;
}

interface CommentsListProps {
	comments: Comment[];
}

export const CommentsList: FC<CommentsListProps> = ({ comments }) => {
	const [commentsList, setCommentsList] = useState<Comment[]>([]);

	const parsedCommentsList = () => {
		if (!comments) return [];

		const list: Comment[] = comments.reduce(
			(acc: Comment[], comment: Comment) => {
				if (!comment.replied_to && !comment.related_to) {
					// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
					return [...acc, { ...comment, nestedComments: [] }];
				}

				return acc;
			},
			[],
		);

		// biome-ignore lint/complexity/noForEach: <explanation>
		comments.forEach((comment) => {
			if (comment.replied_to && !comment.related_to) {
				const index = list.findIndex((item) => item?.id === comment.replied_to);
				if (index !== -1) {
					list[index].nestedComments = [
						...(list[index].nestedComments || []),
						comment,
					];
				}
			}

			if (comment.related_to) {
				const index = list.findIndex((item) => item?.id === comment.replied_to);

				if (index !== -1) {
					const element = list[index].nestedComments?.find(
						(item) => item?.id === comment.related_to,
					);
					list[index].nestedComments?.push({
						...comment,
						reply_to: element?.author,
					});
				}
			}
		});

		setCommentsList(list);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		parsedCommentsList();
	}, [comments]);

	return (
		<div className={cls.CommentsList}>
			{commentsList.map((comment) => (
				<CommentItem
					key={comment.id}
					author={comment.author}
					id={comment.id}
					comment={comment.comment}
					publishedAt={comment.published_at}
					avatar={comment.avatar}
					nestedComments={comment.nestedComments}
				/>
			))}
		</div>
	);
};

CommentsList.displayName = 'CommentsList';
