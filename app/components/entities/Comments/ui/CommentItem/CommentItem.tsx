import { ButtonBase } from '@shared/ButtonBase';
import { IconPicture } from '@shared/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC, useState } from 'react';
import { CommentForm } from '../CommentForm/CommentForm';
import { Comment } from '../CommentsList/CommentsList';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
  author: string;
  avatar?: string;
  comment: string;
  id: number | string;
  nestedComments?: Comment[];
  publishedAt: string;
  repliedTo?: number;
  relatedTo?: number;
  replyTo?: string;
}

export const CommentItem: FC<CommentItemProps> = (props) => {
  const { comment, avatar, author, publishedAt, nestedComments, replyTo } =
    props;
  const [showRepliesForm, setShowRepliesForm] = useState(false);
  const t = useTranslations('base');

  return (
    <article className={cls.Comment} data-testid='comment-item'>
      <header className={cls.CommentHeader}>
        <div className={cls.CommentAvatar}>
          {avatar ? (
            <Image src={avatar} alt={author} width={50} height={50} />
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
          <ButtonBase
            variant='light'
            onClick={() => setShowRepliesForm((prev) => !prev)}>
            {t('reply')}
          </ButtonBase>
        </div>
      </header>

      <div className={cls.CommentBody}>
        {replyTo && <b>@{replyTo} </b>}
        {comment}
      </div>
      {showRepliesForm && (
        <div className={cls.CommentForm} data-testid='comment-form'>
          <CommentForm />
        </div>
      )}

      {nestedComments && nestedComments.length > 0 && (
        <div className={cls.CommentReplies}>
          {nestedComments.map((item) => (
            <CommentItem
              key={item.id}
              author={item.author}
              avatar={item.avatar}
              id={item.id}
              comment={item.comment}
              publishedAt={item.published_at}
              replyTo={item.reply_to}
              nestedComments={item.nestedComments}
            />
          ))}
        </div>
      )}
    </article>
  );
};

CommentItem.displayName = 'CommentItem';
