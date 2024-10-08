'use client';
import { ContainerBase } from '@/components/shared/ContainerBase';
import classNames from 'classnames';
import React, { type FC, useState } from 'react';
import cls from './TheHeader.module.scss';
import {
	HeaderBurger,
	HeaderControls,
	HeaderLogo,
	HeaderNav,
	HeaderPhone,
	HeaderSearch,
	type IMenuItem,
} from './common';

interface TheHeaderProps {
	cartTotal?: number;
	items: IMenuItem[];
	phones: string[];
	handleAddToCart: () => void;
	handleCompare: () => void;
	handleWishlist: () => void;
}

export const TheHeader: FC<TheHeaderProps> = (props) => {
	const {
		cartTotal = 0,
		items,
		phones,
		handleAddToCart,
		handleCompare,
		handleWishlist,
	} = props;

	const [isActive, setIsActive] = useState(false);

	const toggleBurgerMenu = (isActive: boolean) => {
		setIsActive(!isActive);
	};

	const headerBottomClasses = classNames(
		cls.HeaderBottom,
		isActive ? cls.HeaderBottomActive : null,
	);

	return (
		<header className={cls.Header}>
			<ContainerBase>
				<div className={cls.HeaderTop}>
					<HeaderLogo />
					<HeaderBurger toggleBurger={toggleBurgerMenu} />
					<HeaderSearch />
					<HeaderControls
						cartTotal={cartTotal}
						handleCompare={handleCompare}
						handleWishlist={handleWishlist}
						handleAddToCart={handleAddToCart}
					/>
				</div>
			</ContainerBase>
			<div className={headerBottomClasses}>
				<ContainerBase>
					<div className={cls.HeaderBottomRow}>
						<HeaderNav items={items} />
						<HeaderPhone items={phones} />
					</div>
				</ContainerBase>
			</div>
		</header>
	);
};

TheHeader.displayName = 'TheHeader';
