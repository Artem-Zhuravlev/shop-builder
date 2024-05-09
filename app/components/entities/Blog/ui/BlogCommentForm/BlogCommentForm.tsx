import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import {
	emailValidate,
	commentValidate,
	nameValidate,
} from '@utils/validations';
import { InputText, InputTextarea } from '@shared/inputs';
import { ButtonBase } from '@shared/ButtonBase';

export const BlogCommentForm: FC = () => {
	const t = useTranslations('inputs');
	const handleSubmit = () => {
		// TODO: add to post comment form
	};

	return (
		<div className='form-wrapper'>
			<Form
				onSubmit={handleSubmit}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<h4>{t('write_comment')}</h4>
						<InputTextarea
							name='comment'
							placeholder={t('comment')}
							validationHandler={commentValidate}
							required
						/>
						<InputText
							name='name'
							placeholder={t('name')}
							validationHandler={nameValidate}
							required
						/>
						<InputText
							name='email'
							label={t('email')}
							validationHandler={emailValidate}
							placeholder={t('email')}
							required
						/>
						<ButtonBase
							type='submit'
							className='button button_primary'>
							{t('post_comment')}
						</ButtonBase>
					</form>
				)}
			/>
		</div>
	);
};