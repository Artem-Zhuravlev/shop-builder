import {
  InputDatePicker,
  InputRadio,
  InputRadioGroup,
  InputSelect,
  InputText,
  type SelectOption,
} from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Form } from 'react-final-form';

interface ProductsForm {
  model: string;
  sku?: string;
  upc?: string;
  ean?: string;
  jan?: string;
  isbn?: string;
  mpn?: string;
  location?: string;
  price: string;
  tax_class?: string;
  quantity: number;
  minimum_quantity?: number;
  subtract_stock?: SelectOption;
  out_of_stock?: SelectOption;
  requires_shipping?: SelectOption;
  date_available?: string;
  dimension_l?: string;
  dimension_w?: string;
  dimension_h?: string;
  length_class?: string;
  weight?: string;
  weight_class?: SelectOption;
  status: SelectOption;
  sort_order: number;
}

export const AdminProductsDataForm: FC = () => {
  const t = useTranslations();
  const onSubmit = (values: ProductsForm) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <FormLayout
          className='row align-items-center'
          onSubmit={handleSubmit}
          title={t('base.data')}>
          <InputText
            className='col-md-6'
            name='model'
            placeholder={t('inputs.model')}
            required
          />
          <InputText
            className='col-md-6'
            name='sku'
            placeholder={t('inputs.sku')}
          />
          <InputText
            className='col-md-6'
            name='upc'
            placeholder={t('inputs.upc')}
          />
          <InputText
            className='col-md-6'
            name='ean'
            placeholder={t('inputs.ean')}
          />
          <InputText
            className='col-md-6'
            name='jan'
            placeholder={t('inputs.jan')}
          />
          <InputText
            className='col-md-6'
            name='isbn'
            placeholder={t('inputs.isbn')}
          />
          <InputText
            className='col-md-6'
            name='mpn'
            placeholder={t('inputs.mpn')}
          />
          <InputText
            className='col-md-6'
            name='location'
            placeholder={t('inputs.location')}
          />
          <InputText
            className='col-md-6'
            name='price'
            placeholder={t('inputs.price')}
          />
          <InputSelect
            className='col-md-6'
            name='tax_class'
            placeholder={t('inputs.tax_class')}
            options={[
              {
                value: 'taxable_goods',
                label: t('inputs.taxable_goods'),
              },
              {
                value: 'downloadable_goods',
                label: t('inputs.downloadable_goods'),
              },
            ]}
          />
          <InputText
            className='col-md-6'
            type='number'
            name='quantity'
            placeholder={t('inputs.quantity')}
          />
          <InputText
            className='col-md-6'
            type='number'
            name='minimum_quantity'
            placeholder={t('inputs.minimum_quantity')}
          />
          <InputSelect
            className='col-md-6'
            name='substract_stock'
            placeholder={t('inputs.substract_stock')}
            options={[
              {
                value: 'yes',
                label: t('inputs.yes'),
              },
              {
                value: 'no',
                label: t('inputs.no'),
              },
            ]}
          />
          <InputSelect
            className='col-md-6'
            name='out_of_stock'
            placeholder={t('inputs.out_of_stock')}
            options={[
              {
                value: 'two_three_days',
                label: t('inputs.two_three_days'),
              },
              {
                value: 'in_stock',
                label: t('inputs.in_stock'),
              },
              {
                value: 'out_of_stock',
                label: t('inputs.out_of_stock'),
              },
              {
                value: 'pre_order',
                label: t('inputs.pre_order'),
              },
            ]}
          />
          <InputRadioGroup
            className='col-md-6'
            title={t('inputs.requires_shipping')}>
            <InputRadio
              name='requires_shipping'
              value='yes'
              label={t('inputs.yes')}
            />
            <InputRadio
              name='requires_shipping'
              value='no'
              label={t('inputs.no')}
            />
          </InputRadioGroup>
          <InputDatePicker
            className='col-md-6'
            name='date_available'
            placeholder={t('inputs.date_available')}
          />
          <div className='col-12' />
          <InputText
            className='col-md-4'
            name='dimension_l'
            placeholder={t('inputs.dimension_l')}
          />
          <InputText
            className='col-md-4'
            name='dimension_w'
            placeholder={t('inputs.dimension_w')}
          />
          <InputText
            className='col-md-4'
            name='dimension_h'
            placeholder={t('inputs.dimension_h')}
          />
          <InputSelect
            className='col-md-6'
            name='length_class'
            placeholder={t('inputs.length_class')}
            options={[
              {
                value: 'centimeter',
                label: t('inputs.centimeter'),
              },
              {
                value: 'millimeter',
                label: t('inputs.millimeter'),
              },
              {
                value: 'inch',
                label: t('inputs.inch'),
              },
            ]}
          />
          <InputText
            className='col-md-6'
            name='weight'
            placeholder={t('inputs.weight')}
          />
          <InputSelect
            className='col-md-6'
            name='weight_class'
            placeholder={t('inputs.weight_class')}
            options={[
              {
                value: 'kilogram',
                label: t('inputs.kilogram'),
              },
              {
                value: 'gram',
                label: t('inputs.gram'),
              },
              {
                value: 'pound',
                label: t('inputs.pound'),
              },
              {
                value: 'ounce',
                label: t('inputs.ounce'),
              },
            ]}
          />
          <InputSelect
            className='col-md-6'
            name='status'
            placeholder={t('inputs.status')}
            options={[
              {
                value: 'enabled',
                label: t('inputs.enabled'),
              },
              {
                value: 'unlisted',
                label: t('inputs.unlisted'),
              },
              {
                value: 'disabled',
                label: t('inputs.disabled'),
              },
            ]}
          />
          <InputText
            type='number'
            className='col-md-6'
            name='sort_order'
            placeholder={t('inputs.sort_order')}
          />
        </FormLayout>
      )}
    </Form>
  );
};

AdminProductsDataForm.displayName = 'AdminProductsDataForm';
