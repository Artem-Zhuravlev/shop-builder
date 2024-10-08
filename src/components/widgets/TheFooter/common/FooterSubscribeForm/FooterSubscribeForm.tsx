'use client';
import { ButtonBase } from '@/components/shared/ButtonBase';
import { InputText } from '@/components/shared/inputs';
import { emailValidate } from '@/utils/validations';
import { useTranslations } from 'next-intl';
import React, { type FC, useState } from 'react';
import { Form } from 'react-final-form';
import cls from './FooterSubscribeForm.module.scss';

export const FooterSubscribeForm: FC = () => {
	const [searchValue, setSearchValue] = useState('');
	const t = useTranslations('base');

	const onSubmit = () => {
		console.log('submit');
	};

	return (
		<Form onSubmit={onSubmit}>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit} className={cls.FooterSubscribeForm}>
					<InputText
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						name='subscribe'
						placeholder='Email'
						validationHandler={emailValidate}
						isDarkMode
						roundedLeftSide
						withForm={false}
					/>
					<ButtonBase
						type='submit'
						variant='warning'
						roundedRightSide
						className={cls.FooterSubscribeBtn}
					>
						{t('subscribe')}
					</ButtonBase>
				</form>
			)}
		</Form>
	);
};

FooterSubscribeForm.displayName = 'FooterSubscribeForm';
