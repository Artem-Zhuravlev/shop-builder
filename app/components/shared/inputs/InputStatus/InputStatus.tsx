import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputStatusProps {
  className?: string;
  name: string;
}

export const InputStatus: FC<InputStatusProps> = (props) => {
  const { className, name } = props;
  const t = useTranslations();
  const statuses = [
    { value: 'canceled', label: t('base.canceled') },
    { value: 'canceled_reversal', label: t('base.canceled_reversal') },
    { value: 'chargeback', label: t('base.chargeback') },
    { value: 'complete', label: t('base.complete') },
    { value: 'denied', label: t('base.denied') },
    { value: 'expired', label: t('base.expired') },
    { value: 'failed', label: t('base.failed') },
    { value: 'pending', label: t('base.pending') },
    { value: 'processed', label: t('base.processed') },
    { value: 'processing', label: t('base.processing') },
    { value: 'refunded', label: t('base.refunded') },
    { value: 'reversed', label: t('base.reversed') },
    { value: 'shipped', label: t('base.shipped') },
    { value: 'voided', label: t('base.voided') },
  ];

  return (
    <InputSelect
      className={className}
      name={name}
      options={statuses}
      placeholder={t('inputs.status')}
    />
  );
};
