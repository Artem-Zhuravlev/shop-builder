import { LanguageTabs } from '@features/tabs';
import { InputText } from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { Form } from 'react-final-form';

export const AdminRecurringProfilesForm: FC = () => {
  const [language, setLanguage] = useState<'en' | 'ua'>('en');
  const t = useTranslations();
  const onSubmit = () => {};

  return (
    <>
      <LanguageTabs
        items={['en', 'ua']}
        onSelect={(language) => setLanguage(language as 'en' | 'ua')}
      />
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <FormLayout
            className='row align-items-center'
            onSubmit={handleSubmit}
            title={t('admin.recurring_profiles')}>
            <InputText
              name={`${[language]}name`}
              placeholder={t('inputs.name')}
            />
          </FormLayout>
        )}
      </Form>
    </>
  );
};
