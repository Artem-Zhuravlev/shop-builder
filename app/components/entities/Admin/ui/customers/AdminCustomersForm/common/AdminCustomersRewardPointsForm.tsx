'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminCustomersRewardPointsForm: FC = () => {
	const t = useTranslations();
	const onSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<Form
			onSubmit={onSubmit}
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
					<FormLayout title={t('base.reward_points')} onSubmit={handleSubmit}>
						<div className='d-flex gap-1 mb-30'>
							<ButtonBase onClick={() => push('reward_points', undefined)}>
								{t('base.add')}
							</ButtonBase>
							<ButtonBase variant='danger' onClick={() => pop('reward_points')}>
								{t('base.remove')}
							</ButtonBase>
						</div>
						<FieldArray name='reward_points'>
							{({ fields }) =>
								fields.map((name, index) => (
									<div
										key={name}
										style={{
											display: 'grid',
											gridTemplateColumns: '1fr 38px',
											gap: 'var(--space-medium)',
										}}
									>
										<div className='row'>
											<InputText
												className='col-md-4'
												name={`${name}.description`}
												placeholder={t('inputs.description')}
											/>
											<InputText
												className='col-md-4'
												name={`${name}.points`}
												placeholder={t('inputs.points')}
											/>
										</div>
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

AdminCustomersRewardPointsForm.displayName = 'AdminCustomersRewardPointsForm';
