import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputStatusProps {
	className?: string;
	name: string;
}

export const InputReturnStatus: FC<InputStatusProps> = (props) => {
	const { className, name } = props;
	const t = useTranslations();
	const statuses = [
		{ value: 'awaiting_products', label: t('base.awaiting_products') },
		{ value: 'complete', label: t('base.complete') },
		{ value: 'pending', label: t('base.pending') },
	];

	return (
		<InputSelect
			className={className}
			name={name}
			options={statuses}
			placeholder={t('inputs.return_status')}
		/>
	);
};

InputReturnStatus.displayName = 'InputReturnStatus';
