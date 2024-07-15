import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputWeightProps {
	className?: string;
	name: string;
}

export const InputWeight: FC<InputWeightProps> = (props) => {
	const { className, name } = props;
	const t = useTranslations();
	const statuses = [
		{ value: 'kilogram', label: t('base.kilogram') },
		{ value: 'gram', label: t('base.gram') },
		{ value: 'pound', label: t('base.pound') },
		{ value: 'ounce', label: t('base.ounce') },
	];

	return (
		<InputSelect
			className={className}
			name={name}
			options={statuses}
			placeholder={t('inputs.weight_class')}
		/>
	);
};

InputWeight.displayName = 'InputWeight';
