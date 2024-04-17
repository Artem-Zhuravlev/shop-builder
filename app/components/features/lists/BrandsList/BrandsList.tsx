import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import cls from './BrandsList.module.scss';
import { SectionBase } from '@shared/SectionBase';

interface BrandItem {
	name: string;
	image: string;
	to: string;
}

interface BrandsListProps {
	title: string;
	items?: BrandItem[];
}

export const BrandsList: FC<BrandsListProps> = (props) => {
	const { title, items } = props;

	return (
		<SectionBase title={title}>
			<ul className={cls.BrandsList}>
				{items &&
					items.map((item) => (
						<li key={uuidv4()}>
							<Link
								href={item.to}
								className={cls.BrandsLink}>
								<img
									src={item.image}
									alt={item.name}
									className={cls.BrandsImg}
								/>
							</Link>
						</li>
					))}
			</ul>
		</SectionBase>
	);
};
