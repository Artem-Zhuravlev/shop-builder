import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputCurrencyProps {
	className?: string;
	name: string;
}

export const InputCurrency: FC<InputCurrencyProps> = (props) => {
	const { className, name } = props;
	const t = useTranslations();
	// TODO: Add currency API

	return (
		<InputSelect
			className={className}
			name={name}
			options={[
				{ value: 'euro', label: 'Euro' },
				{ value: 'us_dollar', label: 'US Dollar' },
			]}
			placeholder={t('inputs.currency')}
		/>
	);
};

InputCurrency.displayName = 'InputCurrency';
