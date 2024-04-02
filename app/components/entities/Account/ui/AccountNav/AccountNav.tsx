import React, { FC, useId } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import cls from './AccountNav.module.scss';

interface AccountNavItem {
	to: string;
	value: string;
	icon: string;
}

interface AccountNavProps {
	items: AccountNavItem[];
}

export const AccountNav: FC<AccountNavProps> = (props) => {
	const { items } = props;
	const id = useId();
	const pathname = usePathname();

	return (
		<ul className={cls.AccountNav}>
			{items &&
				items.map((item, index) => (
					<li
						className={cls.AccountNavItem}
						key={`${id}-${index}`}>
						<Link
							href={item.to}
							className={classNames(cls.AccountNavLink, {
								[cls.AccountNavLinkActive]: pathname === item.to,
							})}>
							<span className={item.icon} />
							{item.value}
						</Link>
					</li>
				))}
		</ul>
	);
};
