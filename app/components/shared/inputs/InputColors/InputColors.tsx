import React, { FC, useId } from 'react';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';
import cls from './InputColors.module.scss';

interface ColorsListItem {
	color: string;
	value: string;
	tip: string;
}

interface InputColorsProps {
	type: 'radio' | 'checkbox';
	items: ColorsListItem[];
	rounded?: boolean;
}

export const InputColors: FC<InputColorsProps> = ({
	type = 'checkbox',
	items,
	rounded = false,
}) => {
	const id = useId();

	return (
		<ul className={cls.InputColors}>
			{items.map((item, index) => (
				<li
					className={cls.InputColorsItem}
					key={`${id}-${index}`}>
					<TooltipBase content={item.tip}>
						<label className={cls.InputColorsLabel}>
							<Field
								name='colors'
								type={type}
								component='input'
								value={item.value}
							/>
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
