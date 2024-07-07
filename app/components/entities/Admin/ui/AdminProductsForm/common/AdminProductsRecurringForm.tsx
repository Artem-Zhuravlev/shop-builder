import { ButtonBase } from '@shared/ButtonBase';
import { InputSelect } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminProductsRecurringForm: FC = () => {
  const t = useTranslations();
  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        recurring: [{}],
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
            title={t('base.recurring')}>
            <div className='d-flex gap-1 mb-30'>
              <ButtonBase onClick={() => push('recurring', undefined)}>
                {t('base.add')}
              </ButtonBase>
              <ButtonBase variant='danger' onClick={() => pop('recurring')}>
                {t('base.remove')}
              </ButtonBase>
            </div>
            <FieldArray name='recurring'>
              {({ fields }) =>
                fields.map((name, index) => (
                  <div
                    key={name}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 38px',
                      gap: 'var(--space-medium)',
                    }}>
                    <InputSelect
                      name={`${name}.recurring_profile`}
                      placeholder={t('inputs.recurring_profile')}
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
                    <InputSelect
                      name={`${name}.customer_group`}
                      placeholder={t('inputs.customer_group')}
                      options={[
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

AdminProductsRecurringForm.displayName = 'AdminProductsRecurringForm';
