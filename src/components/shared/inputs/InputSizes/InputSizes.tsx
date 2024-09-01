'use client';
import React, { type FC } from 'react';
import { Field } from 'react-final-form';
import cls from './InputSizes.module.scss';

interface InputSizesProps {
	items: string[];
	type: 'radio' | 'checkbox';
}

export const InputSizes: FC<InputSizesProps> = (props) => {
	const { items, type = 'checkbox' } = props;

	return (
		<ul className={cls.InputSizes}>
			{items.map((item) => (
				<li className={cls.InputSizesItem} key={item}>
					<label className={cls.InputSizesLabel}>
						<Field
							name='sizes'
							type={type}
							component='input'
							value={item}
							className='sr-only'
						/>
						<div className={cls.InputSizesContent}>{item}</div>
					</label>
				</li>
			))}
		</ul>
	);
};

InputSizes.displayName = 'InputSizes';
