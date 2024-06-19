'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './HeaderNav.module.scss';
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
      name: string;
      url: string;
    }>;
  }>;
}

export interface HeaderNavProps {
  items: IMenuItem[];
}

export const HeaderNav: FC<HeaderNavProps> = (props) => {
  const { items } = props;
  const [collapse, setCollapse] = useState<boolean>(false);

  const submenuCls = (sub: object[]): string => {
    if (sub.length < 1) {
      return '';
    }

    return `${cls.HeaderNavSubmenuFull}`;
  };

  return (
    <nav className={cls.HeaderNav}>
      <ul className={cls.HeaderNavList}>
        {items &&
          items.map((mainItem, mainIndex) => (
            <li key={uuidv4()} className={cls.HeaderNavItem}>
              <Link href={mainItem.url} className={cls.HeaderNavLink}>
                {mainItem.name}
              </Link>

              {mainItem.sub && (
                <>
                  <button
                    type='button'
                    className={cls.HeaderNavToggler}
                    onClick={() => setCollapse((prev) => !prev)}>
                    {collapse ? '-' : '+'}
                  </button>
                  <div
                    className={classNames(
                      cls.HeaderNavSubmenu,
                      collapse ? cls.HeaderNavSubmenuActive : null,
                      submenuCls(mainItem.sub),
                    )}>
                    {mainItem.sub.map((subItem) => (
                      <HeaderSubmenu key={uuidv4()} item={subItem} />
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

HeaderNav.displayName = 'HeaderNav';
