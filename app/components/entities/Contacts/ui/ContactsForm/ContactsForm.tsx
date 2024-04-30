import React, { FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { emailValidate } from '@utils/validations';
import { InputText, InputTextarea } from '@shared/inputs';
import { ButtonBase } from '@shared/ButtonBase';
import { SectionBase } from '@shared/SectionBase';
import cls from './ContactsForm.module.scss';

interface ContactsFormProps {
	image: string;
}

export const ContactsForm: FC<ContactsFormProps> = (props) => {
	const { image } = props;
	const t = useTranslations('');

	const handleSubmit = (values: any) => {
		// TODO: send contact us form
	};

	return (
		<SectionBase>
			<div className={cls.ContactForm}>
				<Form
					onSubmit={handleSubmit}
					render={({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<h2>{t('contacts.contact_us')}</h2>
							<InputText
								name='name'
								placeholder={t('inputs.full_name')}
								required
							/>
							<InputText
								name='email'
								placeholder={t('inputs.email')}
								required
								validationHandler={emailValidate}
							/>
							<InputText
								name='subject'
								placeholder={t('inputs.subject')}
								required
							/>
							<InputTextarea
								name='enquiry'
								placeholder={t('inputs.enquiry')}
								required
							/>
							<ButtonBase
								type='submit'
								variant='primary'>
								{t('inputs.send_enquiry')}
							</ButtonBase>
						</form>
					)}
				/>
				<Image
					src={image}
					alt={t('contacts.contact_us')}
					width={570}
					height={570}
				/>
			</div>
		</SectionBase>
	);
};
