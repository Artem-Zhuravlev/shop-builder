import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';
import cls from './InputColors.module.scss';

export interface InputColorsProps {
	items: { color: string; tip: string; value: string }[];
	rounded?: boolean;
	type: 'radio' | 'checkbox';
}

export const InputColors: FC<InputColorsProps> = (props) => {
	const { items, rounded = false, type = 'checkbox' } = props;

	return (
		<ul className={cls.InputColors}>
			{items.map((item) => (
				<li
					className={cls.InputColorsItem}
					key={item.color}>
					<TooltipBase content={item.tip}>
						<label className={cls.InputColorsLabel}>
							<Field
								name='colors'
								type={type}
								component='input'
								value={item.value}
								className='sr-only'
							/>
							<div className='sr-only'>{item.value}</div>
							<div
								className={classNames(cls.InputColorsImage, {
									[cls.InputColorsImageRounded]: rounded,
								})}>
								<div style={{ backgroundColor: item.color }} />
							</div>
						</label>
					</TooltipBase>
				</li>
			))}
		</ul>
	);
};
