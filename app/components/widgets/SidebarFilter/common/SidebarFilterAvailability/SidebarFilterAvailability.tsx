'use client';
import React, { FC, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';
import { Form } from 'react-final-form';
import { AutoSave, InputCheckbox } from '@shared/inputs';

interface SidebarFilterAvailabilityProps {
	inStock: number;
	preOrder: number;
}

export const SidebarFilterAvailability: FC<SidebarFilterAvailabilityProps> = (
	props
) => {
	const { inStock, preOrder } = props;
	const t = useTranslations('filters');
	const [resetMode, setResetMode] = useState(false);

	const handleSubmit = useCallback((values: object) => {
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
					resetMode={resetMode}>
					<AutoSave
						debounce={0}
						save={handleSubmit}
					/>
					<div className='d-flex flex-column gap-1'>
						<InputCheckbox
							label={t('in_stock')}
							name='in_stock'
							className='mb-0'
							suffix={inStock}
						/>
						<InputCheckbox
							label={t('pre_order')}
							name='pre_order'
							className='mb-0'
							suffix={preOrder}
						/>
					</div>
				</SidebarToggler>
			)}
		/>
	);
};
