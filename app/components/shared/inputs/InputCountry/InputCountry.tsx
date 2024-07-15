import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputCountryProps {
	className?: string;
	name: string;
}

export const InputCountry: FC<InputCountryProps> = (props) => {
	const { className, name } = props;
	const t = useTranslations();
	// TODO: Add country API

	return (
		<InputSelect
			className={className}
			name={name}
			options={[
				{ value: 'angola', label: 'Angola' },
				{ value: 'ukrainian', label: 'Ukrainian' },
			]}
			placeholder={t('inputs.country')}
		/>
	);
};
