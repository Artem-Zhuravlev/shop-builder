import { InputCheckbox, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Form } from 'react-final-form';

export const AdminLanguagesForm: FC = () => {
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
						title={t('base.options')}
					>
						<InputText
							className='col-md-4'
							name='language_name'
							placeholder={t('inputs.language_name')}
							required
						/>
						<InputText
							className='col-md-4'
							name='code'
							placeholder={t('inputs.code')}
							required
						/>
						<InputText
							className='col-md-4'
							name='locale'
							placeholder={t('inputs.locale')}
							required
						/>
						<InputText
							className='col-md-4'
							type='number'
							name='sort_order'
							placeholder={t('inputs.sort_order')}
							required
						/>
						<InputCheckbox
							className='col-md-4'
							name='status'
							label={t('inputs.status')}
						/>
					</FormLayout>
				);
			}}
		/>
	);
};

AdminLanguagesForm.displayName = 'AdminLanguagesForm';
