import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import {
  AdminCategoriesDataForm,
  AdminCategoriesGeneralForm,
  AdminCategoriesSeoForm,
} from './common';

export const AdminCategoriesForm: FC = () => {
  const t = useTranslations('base');

  const tabs = [
    {
      label: t('general'),
      description: <AdminCategoriesGeneralForm />,
    },
    {
      label: t('data'),
      description: <AdminCategoriesDataForm />,
    },
    {
      label: t('seo'),
      description: <AdminCategoriesSeoForm />,
    },
  ];

  return <TabsBase items={tabs} />;
};

AdminCategoriesForm.displayName = 'AdminCategoriesForm';
