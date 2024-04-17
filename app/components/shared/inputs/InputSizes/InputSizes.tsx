import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Field } from 'react-final-form';
import cls from './InputSizes.module.scss';

interface InputSizesProps {
	type: 'radio' | 'checkbox';
	items: string[];
}

export const InputSizes: FC<InputSizesProps> = ({
	type = 'checkbox',
	items,
}) => {
	return (
		<ul className={cls.InputSizes}>
			{items.map((item) => (
				<li
					className={cls.InputSizesItem}
					key={item}>
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
