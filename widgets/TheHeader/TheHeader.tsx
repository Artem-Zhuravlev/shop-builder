import React, { FC, useState } from 'react';
import { ContainerBase } from '@/shared/ContainerBase';
import classNames from 'classnames';
import {
	HeaderLogo,
	HeaderNav,
	IMenuItem,
	HeaderPhone,
	HeaderBurger,
	HeaderSearch,
	HeaderControls,
} from './common';
import cls from './TheHeader.module.scss';

interface TheHeaderProps {
	items: IMenuItem[];
	phones: string[];
	cartTotal?: number;
	handleCompare: () => void;
	handleWishlist: () => void;
	handleAddToCart: () => void;
}

export const TheHeader: FC<TheHeaderProps> = (props) => {
	const {
		items,
		phones,
		cartTotal = 0,
		handleCompare,
		handleWishlist,
		handleAddToCart,
	} = props;

	const [isActive, setIsActive] = useState(false);

	const toggleBurgerMenu = (isActive: boolean) => {
		setIsActive(!isActive);
	};

	const headerBottomClasses = classNames(
		cls.HeaderBottom,
		isActive ? cls.HeaderBottomActive : null
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
