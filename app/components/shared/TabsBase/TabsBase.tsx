'use client';
import React, { FC, useState, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './TabsBase.module.scss';
import classNames from 'classnames';

interface TabsBaseProps {
	activeTab?: number;
	items: { description: string | ReactNode; label: string }[];
	className?: string;
}

export const TabsBase: FC<TabsBaseProps> = (props) => {
	const { activeTab = 0, items, className } = props;
	const initialActiveTab =
		activeTab >= items.length ? items.length - 1 : activeTab;
	const [value, setValue] = useState(initialActiveTab);

	useEffect(() => {
		setValue(initialActiveTab);
	}, [initialActiveTab]);

	const handleTabClick = (index: number) => {
		setValue(index);
	};

	return (
		<div className={classNames(cls.TabsBase, className)}>
			<div className={cls.Tabs}>
				{items &&
					items.map((item, index) => {
						const tabClasses = [cls.Tab];
						if (index === value) {
							tabClasses.push(cls.TabActive);
						}

						return (
							<button
								className={tabClasses.join(' ')}
								key={uuidv4()}
								onClick={() => handleTabClick(index)}>
								{item.label}
							</button>
						);
					})}
			</div>

			{items && (
				<div className={cls.TabDescription}>{items[value].description}</div>
			)}
		</div>
	);
};

TabsBase.displayName = 'TabsBase';
