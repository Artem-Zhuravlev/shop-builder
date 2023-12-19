import React, { useCallback, useState } from 'react';
import cls from './HeaderSearch.module.scss';
import { InputText } from '../../../../ui/inputs/InputText';
import { HeaderSearchList } from '../HeaderSearchList/HeaderSearchList';
import { useTranslations } from 'next-intl';

export const HeaderSearch = () => {
  const t = useTranslations();
  const [searchValue, setSearchValue] = useState<string>('');
  const [noResults, setNoResults] = useState(true);
  const [searchResult, setSearchResult] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = useCallback((e: any) => {
    setSearchValue(e);
  }, []);

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
      {
        Boolean(searchValue) && (
          <div
            className={cls.HeaderSearchDropdown}
          >
            <HeaderSearchList
              noResults={noResults}
              items={searchResult}
            />
          </div>
        )
      }
    </div>
  )
}
