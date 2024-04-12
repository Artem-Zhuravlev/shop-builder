import React, { FC, useId } from 'react';
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
	const id = useId();

	return (
		<ul className={cls.InputSizes}>
			{items.map((item, index) => (
				<li
					className={cls.InputSizesItem}
					key={`${id}-${index}`}>
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
