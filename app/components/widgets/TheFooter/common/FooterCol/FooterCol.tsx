import React, { FC, useId } from 'react';
import Link from 'next/link';
import cls from './FooterCol.module.scss';
import { HeadingBase } from '@shared/HeadingBase';

interface IFooterListItem {
	to?: string;
	value: string;
	icon?: string;
}

interface FooterColProp {
	title: string;
	description?: string;
	list?: IFooterListItem[];
}

export const FooterCol: FC<FooterColProp> = (props) => {
	const { title, description, list } = props;
	const id = useId();

	return (
		<div className={cls.FooterCol}>
			<HeadingBase
				level={5}
				additionalClass={cls.FooterTitle}>
				{title}
			</HeadingBase>
			{description && <p className={cls.FooterDescription}>{description}</p>}
			{list && (
				<ul className={cls.FooterList}>
					{list.map((item, index) => (
						<li
							className={cls.FooterListItem}
							key={`${index}_${id}`}>
							{item.to ? (
								<Link
									href={item.to}
									className={cls.FooterListLink}>
									{item.value}
								</Link>
							) : (
								<>
									<span className={item.icon} />
									{item.value}
								</>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
