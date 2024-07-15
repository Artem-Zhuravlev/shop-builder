import { InputImage, InputText, InputTextarea } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';

export const AdminSettingsGeneralForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (values: any) => {
		console.log('Form Submitted:', values);
	};

	return (
		<>
			<Form onSubmit={onSubmit}>
				{({ handleSubmit }) => (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('base.general')}
					>
						<InputText
							name='meta_title'
							placeholder={t('inputs.meta_title')}
							required
						/>
						<InputTextarea
							name='meta_description'
							placeholder={t('inputs.meta_description')}
						/>
						<InputTextarea
							name='meta_keywords'
							placeholder={t('inputs.meta_keywords')}
						/>
						<InputImage name='logo' />
					</FormLayout>
				)}
			</Form>
		</>
	);
};

AdminSettingsGeneralForm.displayName = 'AdminSettingsGeneralForm';
