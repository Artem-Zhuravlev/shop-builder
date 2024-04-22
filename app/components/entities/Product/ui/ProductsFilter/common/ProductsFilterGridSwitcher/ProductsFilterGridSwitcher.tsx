import React, { FC, useState } from 'react';
import { useTranslations } from 'next-intl';
import cls from './ProductsFilterGridSwitcher.module.scss';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';
import classNames from 'classnames';

interface ProductsFilterGridSwitcherProps {
	handleSwitchLayout: (value: string) => void;
}

export const ProductsFilterGridSwitcher: FC<ProductsFilterGridSwitcherProps> = (
	props
) => {
	const { handleSwitchLayout } = props;
	const t = useTranslations('base');
	const [layout, setLayout] = useState('');

	const handleClick = (value: string) => {
		setLayout(value);
		handleSwitchLayout(value);
	};

	const buttons = [
		{ label: t('grid'), value: 'grid', icon: 'view_module' },
		{ label: t('list'), value: 'list', icon: 'view_list' },
	];

	return (
		<div className={cls.ProductsFilterGridSwitcher}>
			{buttons.map((button, index) => (
				<TooltipBase
					content={button.label}
					key={index}>
					<button
						type='button'
						className={classNames(cls.ProductsFilterGridSwitcherBtn, {
							[cls.ProductsFilterGridSwitcherBtnActive]:
								layout === button.value,
						})}
						aria-label={button.label}
						onClick={() => handleClick(button.value)}>
						<span className={`icon-${button.icon}`} />
					</button>
				</TooltipBase>
			))}
		</div>
	);
};
