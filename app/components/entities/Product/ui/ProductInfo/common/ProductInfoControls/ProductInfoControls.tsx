import React, { FC } from 'react';
import { Form } from 'react-final-form';
import { AutoSave, InputNumber } from '@shared/inputs';
import cls from './ProductInfoControls.module.scss';

export const ProductInfoControls: FC = () => {
	const handleSubmit = (values: any) => {};

	return (
		<div className={cls.ProductInfoControls}>
			<Form
				onSubmit={handleSubmit}
				render={({ handleSubmit }) => (
					<>
						<AutoSave onSubmit={handleSubmit} />
						<InputNumber name='amount' />
					</>
				)}
			/>
		</div>
	);
};
