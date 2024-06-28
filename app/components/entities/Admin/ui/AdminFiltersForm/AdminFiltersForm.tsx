import { LanguageTabs } from '@features/tabs';
import { ButtonBase } from '@shared/ButtonBase';
import { InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminFiltersForm: FC = () => {
  const t = useTranslations();
  const [language, setLanguage] = useState<'en' | 'ua'>('en');

  const onSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <>
      <LanguageTabs
        items={['en', 'ua']}
        onSelect={(language) => setLanguage(language as 'en' | 'ua')}
      />
      <Form
        onSubmit={onSubmit}
        initialValues={{
          filter_values: [{}],
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
              title={t('base.filters')}>
              <h3 className='h4'>{t('base.filter_group')}</h3>
              <InputText
                name='filter_group_name'
                placeholder={t('inputs.filter_group_name')}
                required
              />
              <InputText
                type='number'
                name='sort_order'
                placeholder={t('inputs.sort_order')}
              />
              <br />
              <h3 className='h4'>{t('base.filter_values')}</h3>
              <div className='d-flex gap-1 mb-30'>
                <ButtonBase onClick={() => push('filter_values', undefined)}>
                  {t('base.add')}
                </ButtonBase>
                <ButtonBase
                  variant='danger'
                  onClick={() => pop('filter_values')}>
                  {t('base.remove')}
                </ButtonBase>
              </div>
              <FieldArray name='filter_values'>
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div
                      key={name}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '150px 1fr 38px',
                        gap: 'var(--space-medium)',
                      }}>
                      <InputText
                        name={`${name}.filter_name`}
                        placeholder={t('inputs.filter_name')}
                      />
                      <InputText
                        type='number'
                        name={`${name}.sort_order`}
                        placeholder={t('inputs.sort_order')}
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
    </>
  );
};

AdminFiltersForm.displayName = 'AdminFiltersForm';
