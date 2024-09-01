'use client';
import { TooltipBase } from '@/components/shared/TooltipBase/TooltipBase';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { useState, type FC } from 'react';
import cls from './ProductsFilterGridSwitcher.module.scss';

export const ProductsFilterGridSwitcher: FC = () => {
	const t = useTranslations('base');
	const [layout, setLayout] = useState(
		localStorage.getItem('display_grid') || '',
	);

	const handleClick = (value: string) => {
		localStorage.setItem('display_grid', value);
		setLayout(value);
	};

	const buttons = [
		{ label: t('grid'), value: 'grid', icon: 'view_module' },
		{ label: t('list'), value: 'list', icon: 'view_list' },
	];

	return (
		<div className={cls.ProductsFilterGridSwitcher}>
			{buttons.map((button) => (
				<TooltipBase content={button.label} key={button.label}>
					<button
						type='button'
						className={classNames(cls.ProductsFilterGridSwitcherBtn, {
							[cls.ProductsFilterGridSwitcherBtnActive]:
								layout === button.value,
						})}
						aria-label={button.label}
						onClick={() => handleClick(button.value)}
					>
						<span className={`icon-${button.icon}`} />
					</button>
				</TooltipBase>
			))}
		</div>
	);
};

ProductsFilterGridSwitcher.displayName = 'ProductsFilterGridSwitcher';
