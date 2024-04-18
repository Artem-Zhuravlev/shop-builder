import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import cls from './AccountNav.module.scss';

interface AccountNavItem {
	icon: string;
	to: string;
	value: string;
}

interface AccountNavProps {
	items: AccountNavItem[];
}

export const AccountNav: FC<AccountNavProps> = (props) => {
	const { items } = props;
	const pathname = usePathname();

	return (
		<ul className={cls.AccountNav}>
			{items &&
				items.map((item) => (
					<li
						className={cls.AccountNavItem}
						key={uuidv4()}>
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
