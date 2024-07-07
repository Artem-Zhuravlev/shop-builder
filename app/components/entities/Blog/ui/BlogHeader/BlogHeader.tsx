import { useFormattedDate } from '@hooks/useFormattedDate';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import type { FC } from 'react';
import cls from './BlogHeader.module.scss';

interface BlogHeaderProps {
  title: string;
  author: string;
  slug: string;
  comments?: number;
  publishedAt: string;
  viewed?: number;
}

export const BlogHeader: FC<BlogHeaderProps> = (props) => {
  const { title, author, comments = 0, publishedAt, slug, viewed = 0 } = props;
  const t = useTranslations('base');

  return (
    <div className={cls.BlogHeader}>
      <h1 className={`h2 ${cls.BlogHeaderTitle}`}>{title}</h1>
      <ul className={cls.BlogHeaderList}>
        <li className={cls.BlogHeaderListItem}>
          {t('author')}:
          <Link href={`/blog/${slug}`} className='link'>
            {author}
          </Link>
          - {useFormattedDate(publishedAt)}
        </li>
        <li className={cls.BlogHeaderListItem}>
          <span className='icon-eye' />
          {viewed}
        </li>
        <li className={cls.BlogHeaderListItem}>
          <span className='icon-bubble2' /> {t('comments', { count: comments })}
        </li>
      </ul>
    </div>
  );
};

BlogHeader.displayName = 'BlogHeader';
