import React, { FC, useId, useState } from 'react';
import { AlertItem, AlertType } from './AlertItem';
import cls from './AlertBase.module.scss';

interface AlertsProps {
  alerts: Array<{ type: AlertType; message: string }>
}

export const AlertBase: FC<AlertsProps> = (props) => {
  const { alerts } = props;
  const id = useId();
  const [ alertItems, setAlertItems ] = useState(alerts);

  const handleClose = (index: number) => {
    const updatedAlerts = alertItems.filter((_, i) => i !== index);

    setAlertItems(updatedAlerts);
  }

  return (
    <div
      className={cls.AlertBase}
    >
      {
        alertItems && alertItems.map(({ type, message }, index) => (
          <AlertItem
            index={index}
            message={message}
            type={type}
            key={`${id}-${index}`}
            onClose={handleClose}
          />
        ))
      }
    </div>
  )
}