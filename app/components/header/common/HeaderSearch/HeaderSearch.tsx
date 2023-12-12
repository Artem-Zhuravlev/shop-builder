import React, { useState } from 'react';
import cls from './HeaderSearch.module.scss';
import { InputText } from '@/app/ui/inputs/InputText';
import { useTranslations } from 'next-intl';

export const HeaderSearch = () => {
  const t = useTranslations();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value)
  }

  return (
    <div
      className={cls.HeaderSearch}
    >
      <InputText
        withForm={false}
        placeholder={t('base.search')}
        value={searchValue}
        name="search"
        onChange={handleSearch}
      />
    </div>
  )
}