import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { HeadingBase } from '@shared/HeadingBase';
import { ContainerBase } from '@shared/ContainerBase';
import cls from './SectionBase.module.scss';

interface SectionBaseProps {
	title?: string;
	children: ReactNode;
	secondary?: boolean;
}

export const SectionBase: FC<SectionBaseProps> = (props) => {
	const { title, children, secondary } = props;

	const sectionClasses = classNames(cls.SectionBase, {
		[cls.SectionBaseSecondary]: secondary,
	});

	return (
		<section className={sectionClasses}>
			<ContainerBase>
				{title && <HeadingBase level={3}>{title}</HeadingBase>}
				{children}
			</ContainerBase>
		</section>
	);
};
