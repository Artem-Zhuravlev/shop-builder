'use client';
import { AutoSave } from '@/components/shared/inputs';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { type FC, useCallback, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { SidebarFilterItem } from '../SidebarFilterItem/SidebarFilterItem';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';
import cls from './SidebarFilterManufacturer.module.scss';
interface SidebarFilterManufacturerProps {
	items: {
		image: string;
		title: string;
		amount: number;
		slug: string;
	}[];
}

export const SidebarFilterManufacturer: FC<SidebarFilterManufacturerProps> = (
	props,
) => {
	const { items } = props;
	const [resetMode, setResetMode] = useState(false);
	const t = useTranslations('filters');

	const handleSubmit = useCallback((values: object) => {
		const mode = Object.values(values).some((item) => item === true);
		setResetMode(mode);
	}, []);

	const handleReset = useCallback((reset: () => void) => {
		reset();
		setResetMode(false);
	}, []);

	return (
		<Form
			onSubmit={handleSubmit}
			render={({ handleSubmit, form }) => (
				<SidebarToggler
					title={t('manufacturer')}
					onReset={() => handleReset(form.reset)}
					resetMode={resetMode}
				>
					<AutoSave debounce={0} save={handleSubmit} />
					{items?.map((item) => (
						<SidebarFilterItem
							key={`${item.amount}-${item.slug}`}
							amount={item.amount}
						>
							<label className={cls.SidebarFilterManufacturerItem}>
								<Field
									name={item.slug}
									component='input'
									type='checkbox'
									className='sr-only'
								/>
								<Image
									src={item.image}
									alt={item.title}
									width={30}
									height={30}
									className={cls.SidebarFilterManufacturerImage}
								/>
								{item.title}
							</label>
						</SidebarFilterItem>
					))}
				</SidebarToggler>
			)}
		/>
	);
};

SidebarFilterManufacturer.displayName = 'SidebarFilterManufacturer';
