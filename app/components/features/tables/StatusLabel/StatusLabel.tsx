import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import cls from './StatusLabel.module.scss';

export type Status =
	| 'awaiting_products'
	| 'pending'
	| 'cancelled'
	| 'canceled_reversal'
	| 'complete'
	| 'complete'
	| 'chargeback'
	| 'expired'
	| 'enabled'
	| 'failed'
	| 'denied'
	| 'delivered'
	| 'disabled'
	| 'processed'
	| 'refunded'
	| 'reversed'
	| 'processing'
	| 'shipped'
	| 'voided';

interface StatusLabelProps {
	value: Status;
}

export const StatusLabel: FC<StatusLabelProps> = ({ value }) => {
	const t = useTranslations('base');

	return (
		<div className={classNames(cls.StatusLabel, cls[value])}>{t(value)}</div>
	);
};
