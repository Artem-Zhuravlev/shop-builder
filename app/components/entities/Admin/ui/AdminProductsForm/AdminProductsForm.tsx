import { TabsBase } from '@shared/TabsBase';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import {
  AdminProductsDataForm,
  AdminProductsDiscountForm,
  AdminProductsGeneralForm,
  AdminProductsLinksForm,
  AdminProductsOptionsForm,
  AdminProductsRecurringForm,
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
    {
      label: t('option'),
      description: <AdminProductsOptionsForm />,
    },
    {
      label: t('recurring'),
      description: <AdminProductsRecurringForm />,
    },
    {
      label: t('discount'),
      description: <AdminProductsDiscountForm />,
    },
  ];

  return <TabsBase items={tabs} />;
};

AdminProductsForm.displayName = 'AdminProductsForm';
