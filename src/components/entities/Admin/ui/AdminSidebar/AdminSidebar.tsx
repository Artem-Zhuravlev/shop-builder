'use client';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState, type FC } from 'react';
import { Collapse } from 'react-collapse';
import { usePathname } from 'next/navigation';
import cls from './AdminSidebar.module.scss';
import { navbarList, type SidebarItem } from './AdminSidebarList';

const SidebarNavItem: FC<{ item: SidebarItem }> = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);
	const currentPath = usePathname();
	const t = useTranslations('admin');
	const linkClasses = classNames(cls.SidebarItemLink, {
		[cls.SidebarItemLinkActive]: isActive(item),
	});

	function isActive(item: SidebarItem): boolean {
		if (!item.to) return isOpen; // If it's a button (not a link), check if it's open
		if (currentPath === item.to) {
			return true; // Direct match
		}
		if (item.children) {
			return item.children.some((child) => isActive(child)); // Check children recursively
		}
		return false; // No match found
	}

	return (
		<li key={item.value}>
			{item.to ? (
				<Link href={item.to} className={linkClasses}>
					{item.icon && <span className={item.icon} />}
					{t(item.value)}
				</Link>
			) : (
				<button
					type='button'
					onClick={() => setIsOpen(!isOpen)}
					className={classNames(cls.SidebarItemBtn, {
						[cls.SidebarItemBtnOpen]: isOpen,
					})}
				>
					{item.icon && <span className={item.icon} />}
					{t(item.value)}
				</button>
			)}

			{item.children && (
				<Collapse isOpened={isOpen || isActive(item)}>
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
