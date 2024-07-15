import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { type FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './AccountNav.module.scss';

interface AccountNavProps {
	items: { icon: string; to: string; value: string }[];
}

export const AccountNav: FC<AccountNavProps> = (props) => {
	const { items } = props;
	const pathname = usePathname();
	const t = useTranslations('account.nav');

	return (
		<ul className={cls.AccountNav}>
			{items?.map((item) => (
				<li className={cls.AccountNavItem} key={uuidv4()}>
					<Link
						href={item.to}
						className={classNames(cls.AccountNavLink, {
							[cls.AccountNavLinkActive]: pathname === item.to,
						})}
					>
						<span className={item.icon} />
						{t(item.value)}
					</Link>
				</li>
			))}
		</ul>
	);
};

AccountNav.displayName = 'AccountNav';
