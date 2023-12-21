import React, { FC, useId, useState } from 'react';
import cls from './HeaderNav.module.scss';
import Link from 'next/link';
import { classNames } from '@/utils/classNames/classNames';
import { HeaderSubmenu } from './HeaderSubmenu';

export interface ISubMenu {
  title: string;
  subMenu: IMenuItem[];
}

export interface IMenuItem {
  name: string;
  url: string;
  sub?: Array<{
    title?: string;
    subMenu?: Array<{
      name:string;
      url:string
    }>
  }>;
}

export interface HeaderNavProps {
  items: IMenuItem[];
}

export const HeaderNav:FC<HeaderNavProps> = (props) => {
  const { items } = props;
  const id = useId();
  const [collapse, setCollapse] = useState<boolean>(false);

  const submenuCls = (sub: object[]): string => {
    if (sub.length < 1) { return '' }
      
    return `${cls.HeaderNavSubmenuFull}`
  }

  const mods: Record<string, boolean> = {
    [cls.HeaderNavSubmenuActive]: collapse
  };

  return (
    <nav
      className={cls.HeaderNav}
    >
      <ul
        className={cls.HeaderNavList}
      >
        {items &&
          items.map((mainItem, mainIndex) => (
            <li
              key={`${id}-${mainIndex}`}
              className={cls.HeaderNavItem}
            >
              <Link
                href={mainItem.url}
                className={cls.HeaderNavLink}
              >
                {mainItem.name}
              </Link>
              
              {mainItem.sub && (
                <>
                  <button
                    type="button"
                    className={cls.HeaderNavToggler}
                    onClick={() => setCollapse(prev => !prev)}
                  >
                    { collapse ? '-' : '+' }
                  </button>
                  <div
                    className={classNames(cls.HeaderNavSubmenu, mods, [submenuCls(mainItem.sub)])}
                  >
                    {mainItem.sub.map((subItem, subIndex) => (
                      <HeaderSubmenu
                        key={`${id}-${mainIndex}-${subIndex}`}
                        item={subItem}
                      />
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
}