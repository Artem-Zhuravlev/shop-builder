import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputLanguageProps {
	className?: string;
	name: string;
	placeholder?: string;
}

export const InputLanguage: FC<InputLanguageProps> = (props) => {
	const { className, name, placeholder } = props;
	const t = useTranslations();
	// TODO: Add languages API

	return (
		<InputSelect
			className={className}
			name={name}
			options={[
				{ value: 'en', label: 'English' },
				{ value: 'ua', label: 'Ukrainian' },
			]}
			placeholder={placeholder ?? t('inputs.choose_language')}
		/>
	);
};
