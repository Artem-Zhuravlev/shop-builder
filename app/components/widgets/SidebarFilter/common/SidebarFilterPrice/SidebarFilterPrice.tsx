import React, { FC, useState, useMemo, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Form } from 'react-final-form';
import { FORM_SUBMIT_DEBOUNCE_DELAY } from '@constants/easing.constants';
import { AutoSave, InputRange, InputText } from '@shared/inputs';
import { SidebarToggler } from '@widgets/SidebarFilter/SidebarToggler';

interface SidebarFilterPriceProps {
	min?: number;
	max?: number;
	defaultMin?: number;
	defaultMax?: number;
}

export const SidebarFilterPrice: FC<SidebarFilterPriceProps> = (props) => {
	const { min = 0, max = 100, defaultMin = 0, defaultMax = 100 } = props;
	const t = useTranslations('filters');
	const [minValue, setMinValue] = useState(defaultMin);
	const [maxValue, setMaxValue] = useState(defaultMax);
	const [resetMode, setResetMode] = useState(false);

	const handleRange = useCallback((value: number | number[]) => {
		if (Array.isArray(value)) {
			setMinValue(value[0]);
			setMaxValue(value[1]);
		}
	}, []);

	const handleSubmit = useCallback(() => {
		if (defaultMin !== minValue || (defaultMax !== maxValue && !resetMode)) {
			setResetMode(true);
			console.log('submit');
		}
	}, [defaultMin, defaultMax, minValue, maxValue, resetMode]);

	const handleInputChange = useCallback(
		(
			value: string,
			setter: React.Dispatch<React.SetStateAction<number>>,
			defaultValue: number
		) => {
			let numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));

			if (isNaN(numericValue)) {
				numericValue = defaultValue;
			} else {
				numericValue = Math.min(numericValue, defaultMax);
			}

			setter(numericValue);
		},
		[defaultMax]
	);

	const handleReset = useCallback(() => {
		setResetMode(false);
		setMinValue(defaultMin);
		setMaxValue(defaultMax);
	}, [defaultMin, defaultMax]);

	const inputRangeDefaultValue = useMemo(
		() => [defaultMin, defaultMax],
		[defaultMin, defaultMax]
	);

	return (
		<SidebarToggler
			title={t('price')}
			resetMode={resetMode}
			onReset={handleReset}>
			<Form
				onSubmit={handleSubmit}
				render={() => {
					return (
						<div
							className='row'
							style={{ gap: 'var(--space-medium)' }}>
							<AutoSave
								debounce={FORM_SUBMIT_DEBOUNCE_DELAY}
								save={handleSubmit}
							/>
							<InputRange
								className='col-12'
								min={min}
								max={max}
								defaultValue={inputRangeDefaultValue}
								value={[minValue, maxValue]}
								range
								onChange={handleRange}
							/>
							<InputText
								name='min'
								className='col-md-6 mb-0'
								value={minValue}
								onChange={(e) =>
									handleInputChange(e.target.value, setMinValue, defaultMin)
								}
							/>
							<InputText
								name='max'
								className='col-md-6 mb-0'
								value={maxValue}
								onChange={(e) =>
									handleInputChange(e.target.value, setMaxValue, defaultMax)
								}
							/>
						</div>
					);
				}}
			/>
		</SidebarToggler>
	);
};
