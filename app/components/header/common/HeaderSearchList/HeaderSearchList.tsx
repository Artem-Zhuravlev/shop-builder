import React, { FC, useId } from 'react';
import Link from 'next/link';
import cls from './HeaderSearchList.module.scss';

interface HeaderSearchListProps {
  items: Array<{
    slug: string;
    thumbnail?: {
      url: string;
      alt: string;
    };
    name: string;
  }>
}

export const HeaderSearchList:FC<HeaderSearchListProps> = (props) => {
  const { items } = props;
  const id = useId();

  return (
    <ul
      className={cls.HeaderSearchList}
    >
      {
        items.length ? items.map((item, index) => (
          <li
            key={`${id}-${index}`}
          >
            <Link
              href={`/${item.slug}`}
            >
              (
                
              )
              {item.name}
            </Link>
          </li>
        )) : (
          <li></li>
        )
      }

    </ul>
  )
}