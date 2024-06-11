import React, { FC, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useTranslations } from 'next-intl';
import { InputText, InputSelect, AutoSave } from '@shared/inputs';

export type ImageFilterProps = {
	date: { value: string; label: string };
	search: string;
};

interface ImagesManagerMediaFilterProps {
	onSelect: (value: ImageFilterProps) => void;
}

export const ImagesManagerMediaFilter: FC<ImagesManagerMediaFilterProps> = (
	props
) => {
	const { onSelect } = props;
	const t = useTranslations();
	const handleSubmit = (value: ImageFilterProps) => {
		onSelect(value);
	};

	useEffect(() => {
		// TODO: API for dates
	}, []);

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<div className='row'>
					<InputSelect
						name='date'
						placeholder={t('inputs.all_dates')}
						className='col-md-4'
						options={[
							{ value: 'all_dates', label: t('inputs.all_dates') },
							{ value: '1', label: '1' },
							{ value: '2', label: '2' },
						]}
					/>
					<InputText
						name='search'
						placeholder={t('inputs.search')}
						className='col-md-4'
					/>

					<AutoSave
						save={handleSubmit}
						debounce={500}
					/>
				</div>
			)}
		/>
	);
};
