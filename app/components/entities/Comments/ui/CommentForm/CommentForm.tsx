import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { InputText, InputTextarea } from '@shared/inputs';
import { ButtonBase } from '@shared/ButtonBase';
import {
	emailValidate,
	commentValidate,
	nameValidate,
} from '@utils/validations';

export const CommentForm: FC = () => {
	const t = useTranslations('inputs');
	const handleSubmit = () => {
		// TODO: add to post comment form
	};

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='row'>
								<InputTextarea
									name='comment'
									placeholder={t('comment')}
									validationHandler={commentValidate}
									required
									className='col-md-6'
								/>

								<InputText
									name='name'
									placeholder={t('name')}
									className='col-md-6'
									validationHandler={nameValidate}
									required
								/>

								<InputText
									name='email'
									label={t('email')}
									validationHandler={emailValidate}
									placeholder={t('email')}
									required
									className='col-md-6'
								/>

								<ButtonBase
									type='submit'
									className='button button_primary'>
									{t('post_comment')}
								</ButtonBase>
							</div>
						</div>
					</div>
				</form>
			)}
		/>
	);
};
