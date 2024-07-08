import { useSelector } from '@lib/redux/store';
import { ButtonBase } from '@shared/ButtonBase';
import { InputLanguage, InputText } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { FieldArray } from 'react-final-form-arrays';

interface AdminOrdersFormProductsProps {
  pop: (field: string, arg?: any) => void;
  push: (field: string, arg?: any) => void;
}

export const AdminOrdersFormProducts: FC<AdminOrdersFormProductsProps> = (
  props,
) => {
  const { pop, push } = props;
  const t = useTranslations();
  const defaultCurrency = useSelector((state) => state.product.currency);

  return (
    <>
      <h3 className='h4'>{t('base.products')}</h3>
      <div className='d-flex gap-1 mb-30'>
        <ButtonBase onClick={() => push('products', undefined)}>
          {t('base.add')}
        </ButtonBase>
        <ButtonBase variant='danger' onClick={() => pop('products')}>
          {t('base.remove')}
        </ButtonBase>
      </div>
      <FieldArray name='products'>
        {({ fields }) =>
          fields.map((name, index) => (
            <div
              key={name}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 38px',
                gap: 'var(--space-medium)',
                alignItems: 'flex-start',
              }}>
              <InputText
                name={`${name}.product`}
                placeholder={t('inputs.product')}
                required
              />
              <InputText
                name={`${name}.model`}
                placeholder={t('inputs.model')}
                required
              />
              <InputText
                type='number'
                name={`${name}.quantity`}
                placeholder={t('inputs.quantity')}
                required
              />
              <InputText
                type='number'
                name={`${name}.unit_price`}
                placeholder={t('inputs.unit_price')}
                required
                prefix={defaultCurrency}
              />
              <InputText
                type='number'
                name={`${name}.total`}
                placeholder={t('inputs.total')}
                required
                prefix={defaultCurrency}
              />
              <ButtonBase onClick={() => fields.remove(index)} variant='danger'>
                <span className='icon-cross' />
              </ButtonBase>
            </div>
          ))
        }
      </FieldArray>
      <InputLanguage name='language' className='col-md-4' />
      <InputText
        className='col-md-4'
        type='number'
        name='reward_points'
        placeholder={t('inputs.reward_points')}
      />
    </>
  );
};

AdminOrdersFormProducts.displayName = 'AdminOrdersFormProducts';
