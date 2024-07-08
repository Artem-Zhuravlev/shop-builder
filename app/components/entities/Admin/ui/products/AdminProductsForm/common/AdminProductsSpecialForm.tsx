import { ButtonBase } from '@shared/ButtonBase';
import { InputDatePicker, InputSelect, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminProductsSpecialForm: FC = () => {
  const t = useTranslations();
  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        special: [{}],
      }}
      mutators={{
        ...arrayMutators,
      }}
      render={({
        handleSubmit,
        form: {
          mutators: { push, pop },
        },
      }) => {
        return (
          <FormLayout
            className='row align-items-center'
            onSubmit={handleSubmit}
            title={t('base.special')}>
            <div className='d-flex gap-1 mb-30'>
              <ButtonBase onClick={() => push('special', undefined)}>
                {t('base.add')}
              </ButtonBase>
              <ButtonBase variant='danger' onClick={() => pop('special')}>
                {t('base.remove')}
              </ButtonBase>
            </div>
            <FieldArray name='special'>
              {({ fields }) =>
                fields.map((name, index) => (
                  <div
                    key={name}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 38px',
                      gap: 'var(--space-medium)',
                    }}>
                    <InputSelect
                      name={`${name}.customer_group`}
                      placeholder={t('inputs.customer_group')}
                      options={[
                        {
                          value: 'two_three_days',
                          label: t('inputs.two_three_days'),
                        },
                        {
                          value: 'in_stock',
                          label: t('inputs.in_stock'),
                        },
                      ]}
                    />
                    <InputText
                      type='number'
                      name={`${name}.priority`}
                      placeholder={t('inputs.priority')}
                    />
                    <InputText
                      name={`${name}.price`}
                      placeholder={t('inputs.price')}
                    />
                    <InputDatePicker
                      name={`${name}.start_date`}
                      placeholder={t('inputs.start_date')}
                    />
                    <InputDatePicker
                      name={`${name}.end_date`}
                      placeholder={t('inputs.end_date')}
                    />
                    <ButtonBase
                      onClick={() => fields.remove(index)}
                      variant='danger'>
                      <span className='icon-cross' />
                    </ButtonBase>
                  </div>
                ))
              }
            </FieldArray>
          </FormLayout>
        );
      }}
    />
  );
};

AdminProductsSpecialForm.displayName = 'AdminProductsSpecialForm';
