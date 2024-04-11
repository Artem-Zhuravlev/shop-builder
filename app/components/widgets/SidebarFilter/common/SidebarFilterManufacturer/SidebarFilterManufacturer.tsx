import React, { FC, useCallback, useId, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SidebarFilterItem } from '../SidebarFilterItem/SidebarFilterItem';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';
import cls from './SidebarFilterManufacturer.module.scss';
import { AutoSave } from '@shared/inputs';

interface SidebarFilterManufacturerItem {
	image: string;
	title: string;
	amount: number;
	slug: string;
}

interface SidebarFilterManufacturerProps {
	items: SidebarFilterManufacturerItem[];
}

export const SidebarFilterManufacturer: FC<SidebarFilterManufacturerProps> = (
	props
) => {
	const { items } = props;
	const [resetMode, setResetMode] = useState(false);
	const id = useId();
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
					resetMode={resetMode}>
					<AutoSave
						debounce={0}
						save={handleSubmit}
					/>
					{items &&
						items.map((item, index) => (
							<SidebarFilterItem
								key={`${id}-${index}`}
								amount={item.amount}>
								<label className={cls.SidebarFilterManufacturerItem}>
									<Field
										name={item.slug}
										component='input'
										type='checkbox'
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
