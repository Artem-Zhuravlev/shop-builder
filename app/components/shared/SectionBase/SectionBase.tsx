import { ContainerBase } from '@shared/ContainerBase';
import classNames from 'classnames';
import React, { type FC, type ReactNode } from 'react';
import cls from './SectionBase.module.scss';

interface SectionBaseProps {
	children: ReactNode;
	secondary?: boolean;
	title?: string;
}

export const SectionBase: FC<SectionBaseProps> = (props) => {
	const { children, secondary, title } = props;
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

SectionBase.displayName = 'SectionBase';
