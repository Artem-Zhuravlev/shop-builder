import React, { FC, useMemo } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import cls from './HeaderSearchList.module.scss';
import { IconPicture } from '@shared/icons';

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
	const t = useTranslations('base');

	const renderItemsList = useMemo(() => {
		return !noResults ? (
			items?.map((item) => (
				<li
					key={uuidv4()}
					className={cls.HeaderSearchItem}>
					<Link
						href={`/${item.slug}`}
						className={cls.HeaderSearchLink}>
						{item.thumbnail ? (
							<div className={cls.HeaderSearchImage}>
								<Image
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
			<li>{t('no_result')}</li>
		);
	}, [noResults, items]);

	return <ul className={cls.HeaderSearchList}>{renderItemsList}</ul>;
};

HeaderSearchList.displayName = 'HeaderSearchList';
