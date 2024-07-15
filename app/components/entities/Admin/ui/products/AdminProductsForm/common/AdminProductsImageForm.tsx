'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputImage, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminProductsImageForm: FC = () => {
	const t = useTranslations();
	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{
				special: [{}],
			}}
			mutators={{
				...arrayMutators,
			}}
			render={({
				handleSubmit,
				form: {
					mutators: { push, pop },
				},
			}) => {
				return (
					<FormLayout
						className='row align-items-center'
						onSubmit={handleSubmit}
						title={t('base.special')}
					>
						<h3 className='h4'>{t('base.image')}</h3>
						<InputImage name='image' />
						<hr />
						<h3 className='h4'>{t('base.additional_images')}</h3>
						<div className='d-flex gap-1 mb-30'>
							<ButtonBase onClick={() => push('additional_images', undefined)}>
								{t('base.add')}
							</ButtonBase>
							<ButtonBase
								variant='danger'
								onClick={() => pop('additional_images')}
							>
								{t('base.remove')}
							</ButtonBase>
						</div>
						<FieldArray name='additional_images'>
							{({ fields }) =>
								fields.map((name, index) => (
									<div
										key={name}
										style={{
											display: 'grid',
											gridTemplateColumns: '150px 1fr 38px',
											gap: 'var(--space-medium)',
										}}
									>
										<InputImage name={`${name}.image`} />
										<InputText
											name={`${name}.sort_order`}
											placeholder={t('inputs.sort_order')}
										/>
										<ButtonBase
											onClick={() => fields.remove(index)}
											variant='danger'
										>
											<span className='icon-cross' />
										</ButtonBase>
									</div>
								))
							}
						</FieldArray>
					</FormLayout>
				);
			}}
		/>
	);
};

AdminProductsImageForm.displayName = 'AdminProductsImageForm';
