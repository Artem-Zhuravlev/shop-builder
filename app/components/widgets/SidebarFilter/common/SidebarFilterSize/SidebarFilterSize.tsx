import React, { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { AutoSave } from '@shared/inputs';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';

export const SidebarFilterSize = () => {
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
					title={t('size')}
					onReset={() => handleReset(form.reset)}
					resetMode={resetMode}>
					<AutoSave
						debounce={0}
						save={handleSubmit}
					/>
				</SidebarToggler>
			)}
		/>
	);
};
