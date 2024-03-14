import React, { FC, useId } from 'react';
import Link from 'next/link';
import cls from './BreadcrumbsBase.module.scss';

interface BreadcrumbsProps {
  pages: Array<{label: string, url?: string}>;
}

export const BreadcrumbsBase:FC<BreadcrumbsProps> = ({ pages }) => {
  const id = useId();
  return (
    <nav
      data-testid="breadcrumbs"
      className={cls.BreadcrumbsBase}
    >
      <ul className={cls.BreadcrumbsList}>
        {
          pages && pages.map(({ url, label }, index) => {
            return (
              <li
                className={cls.BreadcrumbsItem}
                key={`${id}-${index}`}
              >
                {url ? (
                  <Link
                    href={url}
                    className={cls.BreadcrumbsLink}
                  >
                    {label}
                  </Link>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}