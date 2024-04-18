import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import Image from 'next/image';
import cls from './BrandsList.module.scss';
import { SectionBase } from '@shared/SectionBase';

interface BrandsListProps {
	items?: { image: string; name: string; to: string }[];
	title: string;
}

export const BrandsList: FC<BrandsListProps> = (props) => {
	const { items, title } = props;

	return (
		<SectionBase title={title}>
			<ul className={cls.BrandsList}>
				{items &&
					items.map((item) => (
						<li key={uuidv4()}>
							<Link
								href={item.to}
								className={cls.BrandsLink}>
								<Image
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
