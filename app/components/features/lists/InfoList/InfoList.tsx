import React, { FC, useMemo } from 'react';
import cls from './InfoList.module.scss';
import Link from 'next/link';
import { InfoListItem } from './common/InfoListItem';
import { useTranslations } from 'next-intl';

export type Availability = 'In stock' | 'Out of stock';
export interface InfoListProps {
	item: {
		brand: {
			name: string;
			to: string;
		};
		viewed: number;
		reward_points?: number;
		availability?: Availability;
	};
}

export const InfoList: FC<InfoListProps> = ({ item }) => {
	const t = useTranslations('base');

	const labelClass = useMemo(() => {
		if (item.availability && item.availability === 'In stock') {
			return cls.InStock;
		} else {
			return cls.OutOfStock;
		}
	}, [item.availability]);

	return (
		<ul className={cls.InfoList}>
			<InfoListItem label={t('brand')}>
				<Link
					className={cls.InfoListLink}
					href={item.brand.to}>
					{item.brand.name}
				</Link>
			</InfoListItem>
			<InfoListItem label='Viewed'>{item.viewed}</InfoListItem>
			{item.reward_points && (
				<InfoListItem label='Reward Points'>{item.reward_points}</InfoListItem>
			)}
			{item.availability && (
				<InfoListItem label='Availability'>
					<span className={labelClass}>{item.availability}</span>
				</InfoListItem>
			)}
		</ul>
	);
};
