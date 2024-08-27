'use client';
import classNames from 'classnames';
import React, {
	type FC,
	type ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react';
import cls from './TabsBase.module.scss';

export type TabItem = { description: string | ReactNode; label: string };

interface TabsBaseProps {
	activeTab?: number;
	items: TabItem[];
	className?: string;
	handleActiveTab?: (activeTab: TabItem) => void;
	useCssVisibility?: boolean;
}

export const TabsBase: FC<TabsBaseProps> = ({
	activeTab = 0,
	items,
	className,
	handleActiveTab,
	useCssVisibility = false,
}) => {
	const initialActiveTab = Math.min(activeTab, items.length - 1);
	const [activeIndex, setActiveIndex] = useState(activeTab);

	useEffect(() => {
		setActiveIndex(initialActiveTab);
	}, [initialActiveTab]);

	const handleTabClick = useCallback(
		(index: number) => {
			setActiveIndex(index);
			if (handleActiveTab) handleActiveTab(items[index]);
		},
		[items, handleActiveTab],
	);

	return (
		<div className={cls.TabsBase}>
			<div className={classNames(cls.Tabs, className)} role='tablist'>
				{items.map((item, index) => (
					<button
						type='button'
						key={`${item.label}-${index}`}
						className={classNames(cls.Tab, {
							[cls.TabActive]: index === activeIndex,
						})}
						onClick={() => handleTabClick(index)}
						role='tab'
						aria-selected={index === activeIndex}
						aria-controls={`tabpanel-${index}`}
						id={`tab-${index}`}
					>
						{item.label}
					</button>
				))}
			</div>

			{useCssVisibility
				? items.map((item, index) => (
						<div
							key={item.label}
							id={`tabpanel-${index}`}
							role='tabpanel'
							aria-labelledby={`tab-${index}`}
							className={cls.TabDescription}
							style={{
								display: activeIndex === index ? 'block' : 'none',
							}}
						>
							{item.description}
						</div>
					))
				: items.length > 0 && (
						<div
							id={`tabpanel-${activeIndex}`}
							role='tabpanel'
							aria-labelledby={`tab-${activeIndex}`}
							className={cls.TabDescription}
						>
							{items[activeIndex]?.description}
						</div>
					)}
		</div>
	);
};

TabsBase.displayName = 'TabsBase';
