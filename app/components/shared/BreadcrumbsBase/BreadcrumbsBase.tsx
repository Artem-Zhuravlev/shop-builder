import Link from 'next/link';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './BreadcrumbsBase.module.scss';

interface BreadcrumbsProps {
  pages: { label: string; url?: string }[];
}

export const BreadcrumbsBase: FC<BreadcrumbsProps> = (props) => {
  const { pages } = props;

  return (
    <nav data-testid='breadcrumbs' className={cls.BreadcrumbsBase}>
      <ul className={cls.BreadcrumbsList}>
        {pages &&
          pages.map(({ url, label }, index) => {
            return (
              <li className={cls.BreadcrumbsItem} key={uuidv4()}>
                {url ? (
                  <Link href={url} className={cls.BreadcrumbsLink}>
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

BreadcrumbsBase.displayName = 'BreadcrumbsBase';
