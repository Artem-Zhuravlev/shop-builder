import { InputText, InputSelect, InputCheckbox } from '@shared/inputs';
import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { FormLayout } from '@widgets/FormLayout';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';

export const AdminCategoriesDataForm: FC = () => {
	const t = useTranslations();
	const onSubmit = () => {};

	const statusOptions = [
		{ label: t('inputs.enabled'), value: 'enabled' },
		{ label: t('inputs.disabled'), value: 'disabled' },
	];

	const filtersOptions = [
		{ label: 'Color - Black', value: 'black' },
		{ label: 'Color - Pink', value: 'pink' },
		{ label: 'Color - White', value: 'white' },
		{ label: 'Color - Yellow', value: 'yellow' },
		{ label: 'Color - Red', value: 'red' },
	];

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<FormLayout
					onSubmit={handleSubmit}
					title={t('base.general')}>
					<InputText
						name='parent_category'
						placeholder={t('inputs.parent')}
					/>
					<InputSelect
						name='filters'
						isMulti
						placeholder={t('inputs.filters')}
						options={filtersOptions}
					/>
					<InputCheckbox
						name='top'
						label={t('inputs.top')}
					/>
					<InputText
						name='columns'
						placeholder={t('inputs.columns')}
					/>
					<InputText
						name='sort_order'
						placeholder={t('inputs.sort_order')}
					/>
					<InputSelect
						name='status'
						placeholder={t('inputs.status')}
						options={statusOptions}
					/>
				</FormLayout>
			)}
		</Form>
	);
};
