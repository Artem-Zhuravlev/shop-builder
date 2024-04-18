import React, { FC, useMemo } from 'react';
import cls from './InfoList.module.scss';
import Link from 'next/link';
import { InfoListItem } from './common/InfoListItem';
import { useTranslations } from 'next-intl';

export type Availability = 'In stock' | 'Out of stock';
export interface InfoListProps {
	availability?: Availability;
	brand: {
		name: string;
		to: string;
	};
	rewardPoints?: number;
	viewed: number;
}

export const InfoList: FC<InfoListProps> = (props) => {
	const { availability, brand, rewardPoints, viewed } = props;
	const t = useTranslations('base');

	const labelClass = useMemo(() => {
		if (availability && availability === 'In stock') {
			return cls.InStock;
		} else {
			return cls.OutOfStock;
		}
	}, [availability]);

	return (
		<ul className={cls.InfoList}>
			<InfoListItem label={t('brand')}>
				<Link
					className={cls.InfoListLink}
					href={brand.to}>
					{brand.name}
				</Link>
			</InfoListItem>
			<InfoListItem label='Viewed'>{viewed}</InfoListItem>
			{rewardPoints && (
				<InfoListItem label='Reward Points'>{rewardPoints}</InfoListItem>
			)}
			{availability && (
				<InfoListItem label='Availability'>
					<span className={labelClass}>{availability}</span>
				</InfoListItem>
			)}
		</ul>
	);
};
