import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
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
				{title && <h3>{title}</h3>}
				{children}
			</ContainerBase>
		</section>
	);
};
