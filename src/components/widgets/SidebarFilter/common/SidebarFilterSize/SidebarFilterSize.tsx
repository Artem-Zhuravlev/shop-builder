'use client';
import { AutoSave, InputSizes } from '@/components/shared/inputs';
import { useTranslations } from 'next-intl';
import React, { type FC, useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';

interface SidebarFilterSizeProps {
	items: string[];
}

export const SidebarFilterSize: FC<SidebarFilterSizeProps> = (props) => {
	const { items } = props;
	const t = useTranslations('filters');
	const [resetMode, setResetMode] = useState(false);

	const handleSubmit = useCallback((values: { sizes: string[] }) => {
		const mode = Object.keys(values).length > 0 && values.sizes.length > 0;
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
					title={t('size')}
					onReset={() => handleReset(form.reset)}
					resetMode={resetMode}
				>
					<AutoSave debounce={0} save={handleSubmit} />
					<InputSizes type='checkbox' items={items} />
				</SidebarToggler>
			)}
		/>
	);
};

SidebarFilterSize.displayName = 'SidebarFilterSize';
