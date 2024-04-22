import { AutoSave, InputSelect } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';
import { Form } from 'react-final-form';

export const ProductsFilterLimit: FC = () => {
	const t = useTranslations('base');
	const handleSubmit = (values: any) => {
		console.log('Form submitted with values:', values);
	};

	const limits = [
		{ label: 20, value: 20 },
		{ label: 25, value: 20 },
		{ label: 50, value: 50 },
		{ label: 75, value: 75 },
		{ label: 100, value: 100 },
	];

	return (
		<Form onSubmit={handleSubmit}>
			{({ handleSubmit }) => (
				<>
					<AutoSave
						save={handleSubmit}
						debounce={0}
					/>
					<InputSelect
						name='limit'
						placeholder={t('limit')}
						options={limits}
						value={limits[0]}
						label={`${t('show')}:`}
					/>
				</>
			)}
		</Form>
	);
};
