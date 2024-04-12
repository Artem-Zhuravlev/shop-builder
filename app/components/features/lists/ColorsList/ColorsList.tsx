import React, { FC, useId } from 'react';
import classNames from 'classnames';
import { Field } from 'react-final-form';
import { TooltipBase } from '@shared/TooltipBase/TooltipBase';
import cls from './ColorsList.module.scss';

interface ColorsListItem {
	color: string;
	value: string;
	tip: string;
}

interface ColorsListProps {
	type: 'radio' | 'checkbox';
	items: ColorsListItem[];
	rounded?: boolean;
}

export const ColorsList: FC<ColorsListProps> = ({
	type = 'checkbox',
	items,
	rounded = false,
}) => {
	const id = useId();

	return (
		<ul className={cls.ColorsList}>
			{items.map((item, index) => (
				<li
					className={cls.ColorsListItem}
					key={`${id}-${index}`}>
					<TooltipBase content={item.tip}>
						<label className={cls.ColorsListLabel}>
							<Field
								name='colors'
								type={type}
								component='input'
								value={item.value}
							/>
							<div
								className={classNames(cls.ColorsListImage, {
									[cls.ColorsListImageRounded]: rounded,
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
