'use client';
import { AutoSave, InputCheckbox } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC, useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import cls from '../../SidebarFilter.module.scss';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';

interface SidebarFilterAvailabilityProps {
	inStock: number;
	preOrder: number;
}

export const SidebarFilterAvailability: FC<SidebarFilterAvailabilityProps> = (
	props,
) => {
	const { inStock, preOrder } = props;
	const t = useTranslations('filters');
	const [resetMode, setResetMode] = useState(false);

	const handleSubmit = useCallback((values: object): void => {
		const mode = Object.values(values).some((item) => item === true);
		setResetMode(mode);
	}, []);

	const handleReset = useCallback((reset: () => void) => {
		reset();
		setResetMode(false);
	}, []);

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit, form }) => (
				<SidebarToggler
					title={t('availability')}
					onReset={() => handleReset(form.reset)}
					resetMode={resetMode}
				>
					<AutoSave debounce={0} save={handleSubmit} />
					<div className='d-flex flex-column gap-1'>
						<InputCheckbox
							label={t('in_stock')}
							name='in_stock'
							className='mb-0'
							suffix={<div className={cls.suffix}>{inStock}</div>}
							disabled={inStock <= 0}
						/>
						<InputCheckbox
							label={t('pre_order')}
							name='pre_order'
							className='mb-0'
							suffix={<div className={cls.suffix}>{preOrder}</div>}
							disabled={preOrder <= 0}
						/>
					</div>
				</SidebarToggler>
			)}
		/>
	);
};

SidebarFilterAvailability.displayName = 'SidebarFilterAvailability';
