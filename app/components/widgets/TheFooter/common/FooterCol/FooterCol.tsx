import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import cls from './FooterCol.module.scss';

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

	return (
		<div className={cls.FooterCol}>
			<h5 className={cls.FooterTitle}>{title}</h5>
			{description && <p className={cls.FooterDescription}>{description}</p>}
			{list && (
				<ul className={cls.FooterList}>
					{list.map((item, index) => (
						<li
							className={cls.FooterListItem}
							key={uuidv4()}>
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
