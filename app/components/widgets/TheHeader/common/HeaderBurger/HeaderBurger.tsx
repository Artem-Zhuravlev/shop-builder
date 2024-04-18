'use client';
import React, { FC, useState } from 'react';
import cls from './HeaderBurger.module.scss';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

interface HeaderBurgerProps {
	toggleBurger: (isActive: boolean) => void;
}

export const HeaderBurger: FC<HeaderBurgerProps> = (props) => {
	const { toggleBurger } = props;
	const t = useTranslations('base');
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleClick = () => {
		setIsActive((prev) => !prev);
		toggleBurger(isActive);
	};

	const headerBurgerClasses = classNames(
		cls.HeaderBurger,
		isActive ? cls.HeaderBurgerActive : null
	);

	return (
		<button
			type='button'
			className={headerBurgerClasses}
			aria-label={t('burger_label')}
			onClick={handleClick}>
			<span />
		</button>
	);
};
