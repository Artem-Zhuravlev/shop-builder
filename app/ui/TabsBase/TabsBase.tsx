import React, { FC, useId, useState } from 'react';
import cls from './TabsBase.module.scss';

interface ITab {
  label: string;
  description: string;
}

interface TabsBaseProps {
  items: ITab[];
  activeTab?: number;
}

export const TabsBase:FC<TabsBaseProps> = ({ items, activeTab = 0 }) => {
  const id = useId();
  const initialActiveTab = activeTab >= items.length ? items.length - 1 : activeTab;
  const [value, setValue] = useState(initialActiveTab);

  return (
    <div
      className={cls.TabsBase}
    >
      <div className={cls.Tabs}>
        { items && items.map((item, index) => {
          const tabClasses = [cls.Tab];
          if (index === value) {
            tabClasses.push(cls.TabActive);
          }

          return (
            <button
              className={tabClasses.join(' ')}
              key={`${id}-${index}`}
              onClick={() => setValue(index)}
            >
              {item.label}
            </button>
          )
        }) }
      </div>

      { items && (
        <div    
          className={cls.TabDescription}
        >
          { items[value].description }
        </div>
      )}
    </div>
  )
}