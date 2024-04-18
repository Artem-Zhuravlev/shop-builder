import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import cls from './TabsBase.module.scss';

interface TabsBaseProps {
	activeTab?: number;
	items: { description: string; label: string }[];
}

export const TabsBase: FC<TabsBaseProps> = (props) => {
	const { activeTab = 0, items } = props;
	const initialActiveTab =
		activeTab >= items.length ? items.length - 1 : activeTab;
	const [value, setValue] = useState(initialActiveTab);

	return (
		<div className={cls.TabsBase}>
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
								onClick={() => setValue(index)}>
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
