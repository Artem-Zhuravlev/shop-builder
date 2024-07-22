'use client';
import { ButtonBase } from '@shared/ButtonBase';
import { InputCountry, InputSelect, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminGeoZonesForm: FC = () => {
	const t = useTranslations();

	const onSubmit = (value: any) => {
		console.log(value);
	};

	return (
		<div className='form-holder'>
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
						<FormLayout
							className='row align-items-center'
							onSubmit={handleSubmit}
							title={t('base.geo_zones')}
						>
							<InputText
								className='col-md-4'
								name='geo_zone_name'
								placeholder={t('inputs.geo_zone_name')}
								required
							/>
							<InputText
								className='col-md-4'
								name='description'
								placeholder={t('inputs.description')}
								required
							/>
							<div className='d-flex gap-1 mb-30'>
								<ButtonBase onClick={() => push('geo_zones', undefined)}>
									{t('base.add')}
								</ButtonBase>
								<ButtonBase variant='danger' onClick={() => pop('geo_zones')}>
									{t('base.remove')}
								</ButtonBase>
							</div>
							<FieldArray name='geo_zones'>
								{({ fields }) =>
									fields.map((name, index) => (
										<div
											key={name}
											style={{
												display: 'grid',
												gridTemplateColumns: '1fr 1fr 38px',
												gap: 'var(--space-medium)',
												alignItems: 'flex-start',
											}}
										>
											<InputCountry name='country' />
											<InputSelect
												name='zone'
												placeholder={t('inputs.zone')}
												options={[]}
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
		</div>
	);
};

AdminGeoZonesForm.displayName = 'AdminGeoZonesForm';
