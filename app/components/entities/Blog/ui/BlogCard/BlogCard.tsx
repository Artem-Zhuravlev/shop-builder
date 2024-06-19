import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import cls from './BlogCard.module.scss';

export interface BlogCardProps {
  author: string;
  comments: number;
  image: string;
  publishedAt: string;
  title: string;
  to: string;
  viewed: number;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const {
    author,
    comments = 0,
    image,
    publishedAt,
    title,
    to,
    viewed = 0,
  } = props;

  return (
    <article className={cls.BlogCard}>
      <Link href={to} className={cls.BlogCardImage}>
        <Image src={image} alt={title} width={400} height={315} />
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
            {new Date(publishedAt).toLocaleDateString()}
          </div>
        </div>
        <h5 className={cls.BlogCardTitle}>
          <Link href={to}>{title}</Link>
        </h5>
      </div>
    </article>
  );
};

BlogCard.displayName = 'BlogCard';
