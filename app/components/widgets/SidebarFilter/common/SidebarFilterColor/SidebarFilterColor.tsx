'use client';
import { AutoSave, InputColors, type InputColorsProps } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC, useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';

export const SidebarFilterColor: FC<Pick<InputColorsProps, 'items'>> = (
	props,
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
					resetMode={resetMode}
				>
					<AutoSave debounce={0} save={handleSubmit} />
					<InputColors type='checkbox' items={items} />
				</SidebarToggler>
			)}
		/>
	);
};

SidebarFilterColor.displayName = 'SidebarFilterColor';
