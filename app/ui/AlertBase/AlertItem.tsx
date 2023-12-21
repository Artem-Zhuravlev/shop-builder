import React, { FC } from 'react';
import cls from './AlertBase.module.scss';
import { classNames } from '@/utils/classNames/classNames';

export enum AlertType {
  ERROR = 'error',
  SUCCESS = 'success'
}

interface AlertProps {
  type: AlertType;
  message: string;
  onClose: (index: number) => void;
  index: number;
}

export const AlertItem:FC<AlertProps> = (props) => {
  const {
    type = AlertType.SUCCESS,
    message,
    onClose,
    index
  } = props;

  const mods: Record<string, boolean> = {
    [cls.error]: type === AlertType.ERROR,
    [cls.success]: type === AlertType.SUCCESS,
  };

  const handleClose = () => {
    onClose(index);
  }

  return (
    <div
      data-testid="alert-item"
      className={classNames(cls.AlertItem, mods)}
    >
      {message}
      <button
        data-testid="alert-close"
        type="button"
        className={cls.AlertButton}
        onClick={handleClose}
      >
        <span
          className="icon-cross"
        />
      </button>
    </div>
  )
}