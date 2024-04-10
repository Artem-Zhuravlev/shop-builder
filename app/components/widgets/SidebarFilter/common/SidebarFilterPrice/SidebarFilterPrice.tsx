import React, { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { InputRange, InputText } from '@shared/inputs';
import { SidebarFilterItem } from '@widgets/SidebarFilter/SidebarFilterItem';
import { Form, useFormState } from 'react-final-form';
import { useDebouncedCallback } from 'use-debounce';

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
	// const formState = useFormState();
	// console.log(formState);

	const debouncedMinValue = useDebouncedCallback((value) => {
		setMinValue(value);
	}, 1000);

	const handleRange = (value: number | number[]) => {
		if (Array.isArray(value)) {
			setMinValue(value[0]);
			setMaxValue(value[1]);
		}
	};

	const handleBlur = () => {
		console.log('FINISHED BLUR');
		handleChangeComplete();
	};

	const handleChangeComplete = () => {
		console.log('handleChangeComplete');
	};

	return (
		<SidebarFilterItem title={t('price')}>
			<Form
				onSubmit={() => {}}
				render={(props) => {
					return (
						<form onSubmit={props.handleSubmit}>
							<div
								className='row'
								style={{ gap: 'var(--space-medium)' }}>
								<InputRange
									className='col-12'
									min={min}
									max={max}
									defaultValue={[defaultMin, defaultMax]}
									value={[minValue, maxValue]}
									range
									onChange={handleRange}
									onChangeComplete={handleChangeComplete}
								/>
								<InputText
									type='number'
									name='min'
									className='col-md-6 mb-0'
									value={minValue}
									min={defaultMin}
									max={defaultMax}
									onChange={(e) => debouncedMinValue(e.target.value)}
									onBlur={handleBlur}
								/>
								<InputText
									type='number'
									name='max'
									className='col-md-6 mb-0'
									value={maxValue}
									min={defaultMin}
									max={defaultMax}
									onChange={(e) => setMaxValue(Number(e.target.value))}
									onBlur={handleBlur}
								/>
							</div>
						</form>
					);
				}}
			/>
		</SidebarFilterItem>
	);
};
