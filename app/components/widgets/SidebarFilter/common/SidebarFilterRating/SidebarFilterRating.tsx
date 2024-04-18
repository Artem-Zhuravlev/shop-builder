import { AutoSave, InputRadio } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { FC, useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';

interface SidebarFilterRatingProps {
	items: { stars: number; value: number }[];
}

export const SidebarFilterRating: FC<SidebarFilterRatingProps> = (props) => {
	const { items } = props;
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
					title={t('rating')}
					onReset={() => handleReset(form.reset)}
					resetMode={resetMode}>
					<AutoSave
						debounce={0}
						save={handleSubmit}
					/>
					<div className='d-flex flex-column gap-1'>
						{items &&
							items.map((item) => (
								<InputRadio
									key={`stars-${item.stars}}`}
									name='rating'
									value={`${item.stars}`}
									suffix={item.value}
								/>
							))}
					</div>
				</SidebarToggler>
			)}
		/>
	);
};
