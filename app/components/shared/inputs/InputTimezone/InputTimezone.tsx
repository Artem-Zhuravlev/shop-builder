import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputTimezoneProps {
	className?: string;
	name: string;
}

export const InputTimezone: FC<InputTimezoneProps> = (props) => {
	const { className, name } = props;
	const t = useTranslations();
	// TODO: Add timezone API

	return (
		<InputSelect
			className={className}
			name={name}
			options={[
				{ value: 'africa_accra', label: 'Africa/Accra(+00:00)' },
				{ value: 'africa_addis_abeba', label: 'Africa/Addis_Abeba(+03:00)' },
			]}
			placeholder={t('inputs.time_zone')}
		/>
	);
};
