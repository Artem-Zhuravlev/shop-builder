import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import {
  AdminProductsDataForm,
  AdminProductsGeneralForm,
  AdminProductsLinksForm,
} from './common';

export const AdminProductsForm: FC = () => {
  const t = useTranslations('base');

  const tabs = [
    {
      label: t('general'),
      description: <AdminProductsGeneralForm />,
    },
    {
      label: t('data'),
      description: <AdminProductsDataForm />,
    },
    {
      label: t('links'),
      description: <AdminProductsLinksForm />,
    },
  ];

  return <TabsBase items={tabs} />;
};

AdminProductsForm.displayName = 'AdminProductsForm';
