import { AutoSave, InputSelect } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { Form } from 'react-final-form';

export const ProductsFilterSort: FC = () => {
  const t = useTranslations('filters');
  const handleSubmit = (values: any) => {
    console.log('Form submitted with values:', values);
  };

  const sortOptions = [
    { label: t('default'), value: 'default' },
    { label: t('best_sellers'), value: 'best_sellers' },
    { label: t('popular'), value: 'popular' },
    { label: t('newest'), value: 'newest' },
    { label: t('name_asc'), value: 'name_asc' },
    { label: t('name_desc'), value: 'name_desc' },
    { label: t('price_asc'), value: 'price_asc' },
    { label: t('price_desc'), value: 'price_desc' },
    { label: t('rating_desc'), value: 'rating_desc' },
    { label: t('rating_asc'), value: 'rating_asc' },
    { label: t('model_asc'), value: 'model_asc' },
    { label: t('model_desc'), value: 'model_desc' },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <>
          <AutoSave save={handleSubmit} debounce={0} />
          <InputSelect
            name='sort'
            placeholder={t('sort_by')}
            options={sortOptions}
            value={sortOptions[0]}
            label={`${t('sort_by')}:`}
            className='mb-0'
          />
        </>
      )}
    </Form>
  );
};

ProductsFilterSort.displayName = 'ProductsFilterSort';
