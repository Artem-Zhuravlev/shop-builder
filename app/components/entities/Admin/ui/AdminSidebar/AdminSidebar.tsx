import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Collapse } from 'react-collapse';
import cls from './AdminSidebar.module.scss';
import { SidebarItem, navbarList } from './AdminSidebarList';

const SidebarNavItem: FC<{ item: SidebarItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('admin');

  return (
    <li key={item.value}>
      {item.to ? (
        <Link href={item.to} className={cls.SidebarItemLink}>
          {item.icon && <span className={item.icon} />}
          {t(item.value)}
        </Link>
      ) : (
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className={classNames(cls.SidebarItemBtn, {
            [cls.SidebarItemBtnOpen]: isOpen,
          })}>
          {item.icon && <span className={item.icon} />}
          {t(item.value)}
        </button>
      )}

      {item.children && (
        <Collapse isOpened={isOpen}>
          <SidebarList items={item.children} />
        </Collapse>
      )}
    </li>
  );
};

const SidebarList: FC<{ items: SidebarItem[] }> = ({ items }) => {
  return (
    <ul className={cls.SidebarList}>
      {items.map((item) => (
        <SidebarNavItem key={item.value} item={item} />
      ))}
    </ul>
  );
};

export const AdminSidebar: FC = () => {
  const [navbar] = useState(navbarList);

  return (
    <aside className={cls.AdminSidebar}>
      <SidebarList items={navbar} />
    </aside>
  );
};

AdminSidebar.displayName = 'AdminSidebar';
