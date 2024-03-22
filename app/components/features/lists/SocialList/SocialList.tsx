import React, { FC, useId } from 'react';
import classNames from 'classnames';
import cls from './SocialList.module.scss';

interface ISocialItem {
	url: string;
	icon: string;
}
interface SocialListProps {
	items: ISocialItem[];
	className?: string;
}

export const SocialList: FC<SocialListProps> = (props) => {
	const { items, className } = props;
	const id = useId();
	const socialListClasses = classNames(cls.SocialList, className);

	return (
		<ul className={socialListClasses}>
			{items &&
				items.map((item, index) => (
					<li
						key={`${id}-${index}`}
						className={cls.SocialItem}>
						<a
							href={item.url}
							target='_blank'
							rel='noreferrer'
							className={cls.SocialLink}>
							<span className={`icon-${item.icon}`}></span>
						</a>
					</li>
				))}
		</ul>
	);
};
