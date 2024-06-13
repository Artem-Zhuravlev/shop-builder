'use client';
import React, { FC, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { InputColors, InputColorsProps } from '@shared/inputs';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';
import { AutoSave } from '@shared/inputs';

export const SidebarFilterColor: FC<Pick<InputColorsProps, 'items'>> = (
	props
) => {
	const { items } = props;
	const [resetMode, setResetMode] = useState(false);
	const t = useTranslations('filters');

	const handleSubmit = useCallback((values: { colors: string[] }) => {
		const mode = Object.keys(values).length > 0 && values.colors.length > 0;
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
					title={t('color')}
					onReset={() => handleReset(form.reset)}
					resetMode={resetMode}>
					<AutoSave
						debounce={0}
						save={handleSubmit}
					/>
					<InputColors
						type='checkbox'
						items={items}
					/>
				</SidebarToggler>
			)}
		/>
	);
};

SidebarFilterColor.displayName = 'SidebarFilterColor';
