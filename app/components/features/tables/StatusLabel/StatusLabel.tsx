import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import cls from './StatusLabel.module.scss';

export type Status = 'pending' | 'cancelled' | 'delivered' | 'processing' | 'shipped'

interface StatusLabelProps {
  value: Status;
}

export const StatusLabel: FC<StatusLabelProps> = ({ value }) => {
  const t = useTranslations('base');

  return (
    <div className={classNames(cls.StatusLabel, cls[value])}>{t(value)}</div>
  );
};
