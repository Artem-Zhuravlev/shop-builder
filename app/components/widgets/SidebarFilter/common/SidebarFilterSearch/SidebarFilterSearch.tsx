'use client';
import { FORM_SUBMIT_DEBOUNCE_DELAY } from '@constants/easing.constants';
import { AutoSave, InputText } from '@shared/inputs';
import { useTranslations } from 'next-intl';
import { FC, useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import { SidebarToggler } from '../SidebarToggler/SidebarToggler';

export const SidebarFilterSearch: FC = () => {
  const [resetMode, setResetMode] = useState(false);
  const t = useTranslations('filters');

  const handleSubmit = async (value: string) => {
    const mode = Object.keys(value).length > 0 && value.search.length > 0;
    setResetMode(mode);
  };

  const handleReset = useCallback((reset: () => void) => {
    reset();
    setResetMode(false);
  }, []);

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, form }) => (
        <SidebarToggler
          title={t('search')}
          onReset={() => handleReset(form.reset)}
          resetMode={resetMode}>
          <AutoSave debounce={FORM_SUBMIT_DEBOUNCE_DELAY} save={handleSubmit} />
          <InputText name='search' placeholder={t('search')} />
        </SidebarToggler>
      )}
    />
  );
};

SidebarFilterSearch.displayName = 'SidebarFilterSearch';
