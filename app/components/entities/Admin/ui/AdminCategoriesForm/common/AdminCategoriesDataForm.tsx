import { LanguageTabs } from '@features/tabs';
import type { ImageMetaProps } from '@lib/types/ImageMetaProps';
import {
  InputCheckbox,
  InputImage,
  InputSelect,
  InputText,
  type SelectOption,
} from '@shared/inputs';
import { FormLayout } from '@widgets/FormLayout';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';
import { Form } from 'react-final-form';

interface CategoriesForm {
  parent_category: string;
  filters: SelectOption;
  top: boolean;
  image: ImageMetaProps;
  columns: string | number;
  sort_order: string | number;
  status: SelectOption;
}

interface CategoriesFormData {
  ua: CategoriesForm;
  en: CategoriesForm;
}

export const AdminCategoriesDataForm: FC = () => {
  const [language, setLanguage] = useState<'en' | 'ua'>('en');
  const t = useTranslations();
  const onSubmit = () => {};

  const statusOptions = [
    { label: t('inputs.enabled'), value: 'enabled' },
    { label: t('inputs.disabled'), value: 'disabled' },
  ];

  const filtersOptions = [
    { label: 'Color - Black', value: 'black' },
    { label: 'Color - Pink', value: 'pink' },
    { label: 'Color - White', value: 'white' },
    { label: 'Color - Yellow', value: 'yellow' },
    { label: 'Color - Red', value: 'red' },
  ];

  const data: CategoriesFormData = {
    ua: {
      parent_category: 'Категорія ua',
      filters: { label: 'Color - Black', value: 'black' },
      image: { id: 3, url: 'https://picsum.photos/200/300', alt: 'image 3' },
      top: true,
      columns: 1,
      sort_order: 6,
      status: { label: t('inputs.enabled'), value: 'enabled' },
    },
    en: {
      parent_category: 'Parent category ua',
      filters: { label: 'Color - White', value: 'white' },
      image: { id: 3, url: 'https://picsum.photos/200/300', alt: 'image 3' },
      top: true,
      columns: 1,
      sort_order: 6,
      status: { label: t('inputs.enabled'), value: 'enabled' },
    },
  };

  return (
    <>
      <LanguageTabs
        items={['en', 'ua']}
        onSelect={(language) => setLanguage(language as 'en' | 'ua')}
      />
      <Form onSubmit={onSubmit} initialValues={data[language]}>
        {({ handleSubmit }) => (
          <FormLayout onSubmit={handleSubmit} title={t('base.general')}>
            <InputText
              name='parent_category'
              placeholder={t('inputs.parent')}
            />
            <InputSelect
              name='filters'
              isMulti
              placeholder={t('inputs.filters')}
              options={filtersOptions}
            />
            <InputImage name='image' />
            <InputCheckbox name='top' label={t('inputs.top')} />
            <InputText name='columns' placeholder={t('inputs.columns')} />
            <InputText name='sort_order' placeholder={t('inputs.sort_order')} />
            <InputSelect
              name='status'
              placeholder={t('inputs.status')}
              options={statusOptions}
            />
          </FormLayout>
        )}
      </Form>
    </>
  );
};

AdminCategoriesDataForm.displayName = 'AdminCategoriesDataForm';
