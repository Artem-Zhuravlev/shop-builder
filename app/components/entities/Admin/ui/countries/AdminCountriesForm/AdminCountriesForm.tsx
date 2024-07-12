import { InputCheckbox, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Form } from 'react-final-form';

export const AdminCountriesForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('base.countries')}
					>
						<InputText
							className='col-md-4'
							name='country_name'
							placeholder={t('admin.country_name')}
							required
						/>
						<InputText
							className='col-md-4'
							name='iso_code_2'
							placeholder={t('admin.iso_code_2')}
						/>
						<InputText
							className='col-md-4'
							name='iso_code_3'
							placeholder={t('admin.iso_code_3')}
						/>
						<InputCheckbox
							name='postcode_required'
							label={t('admin.postcode_required')}
						/>
						<InputCheckbox name='status' label={t('inputs.status')} />
					</FormLayout>
				);
			}}
		/>
	);
};

AdminCountriesForm.displayName = 'AdminCountriesForm';
