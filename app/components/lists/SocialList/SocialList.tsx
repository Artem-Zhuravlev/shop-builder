import React, { FC, useId } from 'react';
import cls from './SocialList.module.scss';

interface SocialListProps {
  items: Array<{
    url: string,
    icon: string
  }>
}

export const SocialList:FC<SocialListProps> = ({ items }) => {
  const id = useId();

  return (
    <ul
      className={cls.SocialList}
    >
      { items && items.map((item, index) => (
        <li
          key={`${id}-${index}`}
          className={cls.SocialItem}
        >
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className={cls.SocialLink}
          >
            <span className={`icon-${item.icon}`}></span>
          </a>
        </li>
      )) }
    </ul>
  )
}