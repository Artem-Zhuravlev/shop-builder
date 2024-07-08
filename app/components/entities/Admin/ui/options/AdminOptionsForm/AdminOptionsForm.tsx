import { LanguageTabs } from '@features/tabs';
import { ButtonBase } from '@shared/ButtonBase';
import { InputImage, InputSelect, InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import arrayMutators from 'final-form-arrays';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';
import { Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

export const AdminOptionsForm: FC = () => {
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
              title={t('base.options')}>
              <InputText
                className='col-md-4'
                name={`${language}.option_name`}
                placeholder={t('inputs.option_name')}
                required
              />
              <InputSelect
                className='col-md-4'
                name='type'
                placeholder={t('inputs.type')}
                options={[
                  { value: 'select', label: 'Select' },
                  { value: 'radio', label: 'Radio' },
                  { value: 'checkbox', label: 'Checkbox' },
                  { value: 'text', label: 'Text' },
                  { value: 'textarea', label: 'Textarea' },
                  { value: 'file', label: 'File' },
                  { value: 'date', label: 'Date' },
                  { value: 'time', label: 'Time' },
                  { value: 'date_and_time', label: 'Date & time' },
                ]}
              />
              <InputText
                className='col-md-4'
                type='number'
                name='sort_order'
                placeholder={t('inputs.sort_order')}
              />
              <div className='d-flex gap-1 mb-30'>
                <ButtonBase
                  onClick={() => push(`${language}.option_values`, undefined)}>
                  {t('base.add')}
                </ButtonBase>
                <ButtonBase
                  variant='danger'
                  onClick={() => pop(`${language}.option_values`)}>
                  {t('base.remove')}
                </ButtonBase>
              </div>
              <FieldArray name={`${language}.option_values`}>
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div
                      key={name}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '150px 1fr 1fr 38px',
                        gap: 'var(--space-medium)',
                        alignItems: 'flex-start',
                      }}>
                      <InputImage name={`${name}.image`} />
                      <InputText
                        name={`${name}.option_value_name`}
                        placeholder={t('inputs.option_value_name')}
                        required
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

AdminOptionsForm.displayName = 'AdminOptionsForm';
