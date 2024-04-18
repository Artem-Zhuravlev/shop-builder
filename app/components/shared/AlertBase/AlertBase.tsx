import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AlertItem, AlertItemProps } from './common/AlertItem';
import cls from './AlertBase.module.scss';

export interface AlertsProps {
	alerts: Pick<AlertItemProps, 'type' | 'message'>[];
}

export const AlertBase: FC<AlertsProps> = (props) => {
	const { alerts } = props;
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
						key={uuidv4()}
						onClose={handleClose}
					/>
				))}
		</div>
	);
};
