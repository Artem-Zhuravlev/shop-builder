import React, { FC, useId, useState } from 'react';
import { AlertItem, IAlertItem } from './common/AlertItem';
import cls from './AlertBase.module.scss';

interface AlertsProps {
	alerts: IAlertItem[];
}

export const AlertBase: FC<AlertsProps> = (props) => {
	const { alerts } = props;
	const id = useId();
	const [alertItems, setAlertItems] = useState(alerts);

	const handleClose = (index: number) => {
		const updatedAlerts = alertItems.filter((_, i) => i !== index);

		setAlertItems(updatedAlerts);
	};

	return (
		<div
			data-testid='alert-base'
			className={cls.AlertBase}>
			{alertItems &&
				alertItems.map(({ type, message }, index) => (
					<AlertItem
						index={index}
						message={message}
						type={type}
						key={`${id}-${index}`}
						onClose={handleClose}
					/>
				))}
		</div>
	);
};
