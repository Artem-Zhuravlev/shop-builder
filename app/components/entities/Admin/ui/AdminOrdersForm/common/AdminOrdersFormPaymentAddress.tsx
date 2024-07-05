import { InputSelect, InputText } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

export const AdminOrdersFormPaymentAddress: FC = () => {
  const t = useTranslations();

  return (
    <>
      <h3 className='h4'>{t('base.payment_address')}</h3>
      <InputText
        className='col-md-4'
        name='payment_address.first_name'
        placeholder={t('inputs.first_name')}
      />
      <InputText
        className='col-md-4'
        name='payment_address.last_name'
        placeholder={t('inputs.last_name')}
      />
      <InputText
        className='col-md-4'
        name='payment_address.company'
        placeholder={t('inputs.company')}
      />
      <InputText
        className='col-md-4'
        name='payment_address.address_1'
        placeholder={t('inputs.address_1')}
      />
      <InputText
        className='col-md-4'
        name='payment_address.address_2'
        placeholder={t('inputs.address_2')}
      />
      <InputText
        className='col-md-4'
        name='payment_address.city'
        placeholder={t('inputs.city')}
      />
      <InputText
        className='col-md-4'
        name='payment_address.postcode'
        placeholder={t('inputs.postcode')}
      />
      <InputSelect
        className='col-md-4'
        name='payment_address.country'
        placeholder={t('inputs.country')}
        options={[{ value: 'algeria', label: 'Algeria' }]}
      />
      <InputSelect
        className='col-md-4'
        name='payment_address.region'
        placeholder={t('inputs.region')}
        options={[{ value: 'agdam', label: 'Agdam' }]}
      />
    </>
  );
};

AdminOrdersFormPaymentAddress.displayName = 'AdminOrdersFormPaymentAddress';
