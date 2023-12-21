import React, { useCallback, useEffect, useState } from 'react';
import cls from './HeaderSearch.module.scss';
import { InputText } from '@/ui/inputs/InputText';
import { HeaderSearchList, IResultList } from '../HeaderSearchList/HeaderSearchList';
import { useTranslations } from 'next-intl';
import { DEBOUNCE_DELAY } from '@/constants/easing.constants';
import { debounce } from '@/utils/debounce/debounce';

export const HeaderSearch = () => {
  const t = useTranslations();
  const [searchValue, setSearchValue] = useState<string>('');
  const [noResults, setNoResults] = useState(true);
  const [searchResult, setSearchResult] = useState<IResultList>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = useCallback(debounce((e: any) => {
    console.log(e);
    setSearchValue(e);
  }, DEBOUNCE_DELAY), []);

  useEffect(() => {
    setTimeout(() => {
      setNoResults(false);
      setSearchResult([
        {
          name: 'Adidas',
          slug: 'adidas'
        }
      ])
    }, 1000)
  }, [])

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
