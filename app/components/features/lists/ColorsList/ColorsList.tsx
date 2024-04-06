import React, { FC, useEffect, useId, useState } from 'react';
import classNames from 'classnames';
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
	onSelectedColor: (value: string | string[]) => void;
	rounded?: boolean;
}

export const ColorsList: FC<ColorsListProps> = ({
	type = 'checkbox',
	items,
	rounded = false,
	onSelectedColor,
}) => {
	const id = useId();
	const [selectedValues, setSelectedValues] = useState<string[]>([]);

	useEffect(() => {
		if (type === 'checkbox') {
			onSelectedColor(selectedValues);
		}
	}, [selectedValues]);

	const handleChange = (value: string) => {
		if (type === 'checkbox') {
			if (selectedValues.includes(value)) {
				setSelectedValues(selectedValues.filter((color) => color !== value));
			} else {
				setSelectedValues([...selectedValues, value]);
			}
		} else {
			setSelectedValues([value]);
			onSelectedColor(value);
		}
	};

	return (
		<ul className={cls.ColorsList}>
			{items.map((item, index) => (
				<li
					className={cls.ColorsListItem}
					key={`${id}-${index}`}>
					<TooltipBase content={item.tip}>
						<label className={cls.ColorsListLabel}>
							<input
								type={type}
								name={type === 'radio' ? `colors-${id}` : undefined}
								checked={
									type === 'checkbox'
										? selectedValues.includes(item.value)
										: selectedValues[0] === item.value
								}
								onChange={() => handleChange(item.value)}
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
