import React, { useCallback, useEffect, useState } from 'react';
import cls from './HeaderSearch.module.scss';
import { InputText } from '@shared/inputs';
import {
	HeaderSearchList,
	IResultList,
} from '../HeaderSearchList/HeaderSearchList';
import { useTranslations } from 'next-intl';
import { DEBOUNCE_DELAY } from '@constants/easing.constants';
import { debounce } from '@utils/debounce';
import { Form } from 'react-final-form';

export const HeaderSearch = () => {
	const t = useTranslations();
	const [searchValue, setSearchValue] = useState<string>('');
	const [noResults, setNoResults] = useState(true);
	const [searchResult, setSearchResult] = useState<IResultList>(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSearch = useCallback(
		debounce((e: any) => {
			console.log(e);
			setSearchValue(e);
		}, DEBOUNCE_DELAY),
		[]
	);

	useEffect(() => {
		setTimeout(() => {
			setNoResults(false);
			setSearchResult([
				{
					name: 'Adidas',
					slug: 'adidas',
				},
			]);
		}, 1000);
	}, []);

	return (
		<div className={cls.HeaderSearch}>
			<Form onSubmit={handleSearch}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputText
							placeholder={t('base.search')}
							name='search'
							className='mb-0'
							onChange={handleSearch}
						/>
					</form>
				)}
			</Form>
			{Boolean(searchValue) && (
				<div className={cls.HeaderSearchDropdown}>
					<HeaderSearchList
						noResults={noResults}
						items={searchResult}
					/>
				</div>
			)}
		</div>
	);
};
