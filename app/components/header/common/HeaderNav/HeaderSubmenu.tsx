import React, { FC, useId } from 'react';
import Link from 'next/link';
import cls from './HeaderSubmenu.module.scss';

interface HeaderSubmenuProps {
  item: {
    title?: string;
    subMenu?: Array<{
      url: string;
      name: string;
    }>
  }
}

export const HeaderSubmenu:FC<HeaderSubmenuProps> = (props) => {
  const { item } = props;
  const id = useId();

  return (
    <div
      className={cls.HeaderNavCol}
    >
      {item.title && (
        <h4
          className={cls.HeaderNavTitle}
        >
          {item.title}
        </h4>
      )}
      {item.subMenu && (
        <ul
          className={cls.HeaderNavSubList}
        >
          {item.subMenu.map((item, index) => (
            <li
              key={`${id}-${index}`}
            >
              <Link
                href={item.url}
                className={cls.HeaderNavSubLink}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}