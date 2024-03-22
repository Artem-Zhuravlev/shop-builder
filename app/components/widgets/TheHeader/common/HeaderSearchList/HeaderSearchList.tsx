import React, { FC, useId, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import cls from './HeaderSearchList.module.scss';
import { IconPicture } from '@shared/icons/IconPicture';

export type IResultList = Array<{
	slug: string;
	thumbnail?: {
		url: string;
		alt: string;
	};
	name: string;
}> | null;

interface HeaderSearchListProps {
	items: IResultList;
	noResults: boolean;
}

export const HeaderSearchList: FC<HeaderSearchListProps> = (props) => {
	const { items, noResults } = props;
	const id = useId();
	const t = useTranslations();

	const renderItemsList = useMemo(() => {
		return !noResults ? (
			items?.map((item, index) => (
				<li
					key={`${id}-${index}`}
					className={cls.HeaderSearchItem}>
					<Link
						href={`/${item.slug}`}
						className={cls.HeaderSearchLink}>
						{item.thumbnail ? (
							<div className={cls.HeaderSearchImage}>
								<img
									src={item.thumbnail.url}
									alt={item.thumbnail.alt}
								/>
							</div>
						) : (
							<div className={cls.HeaderSearchEmptyImage}>
								<IconPicture />
							</div>
						)}
						{item.name}
					</Link>
				</li>
			))
		) : (
			<li>{t('base.no_result')}</li>
		);
	}, [noResults, items]);

	return <ul className={cls.HeaderSearchList}>{renderItemsList}</ul>;
};
