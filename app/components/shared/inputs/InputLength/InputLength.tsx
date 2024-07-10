import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputLengthProps {
	className?: string;
	name: string;
}

export const InputLength: FC<InputLengthProps> = (props) => {
	const { className, name } = props;
	const t = useTranslations();
	const statuses = [
		{ value: 'centimeter', label: t('base.centimeter') },
		{ value: 'millimeter', label: t('base.millimeter') },
		{ value: 'inch', label: t('base.inch') },
	];

	return (
		<InputSelect
			className={className}
			name={name}
			options={statuses}
			placeholder={t('inputs.length_class')}
		/>
	);
};

InputLength.displayName = 'InputLength';
