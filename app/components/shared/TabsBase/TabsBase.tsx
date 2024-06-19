'use client';
import classNames from 'classnames';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import cls from './TabsBase.module.scss';

export type TabItem = { description: string | ReactNode; label: string };

interface TabsBaseProps {
  activeTab?: number;
  items: TabItem[];
  className?: string;
}

export const TabsBase: FC<TabsBaseProps> = ({
  activeTab = 0,
  items,
  className,
}) => {
  const initialActiveTab = Math.min(activeTab, items.length - 1);
  const [activeIndex, setActiveIndex] = useState(initialActiveTab);

  useEffect(() => {
    setActiveIndex(initialActiveTab);
  }, [initialActiveTab]);

  useEffect(() => {
    if (activeIndex >= items.length) {
      setActiveIndex(items.length - 1);
    } else if (activeIndex === -1 && items.length > 0) {
      setActiveIndex(0);
    }
  }, [items.length, activeIndex]);

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (items.length > 0 && activeIndex >= items.length) {
      setActiveIndex(Math.max(activeIndex - 1, 0));
    }
  }, [items, activeIndex]);

  return (
    <div className={classNames(cls.TabsBase, className)}>
      <div className={cls.Tabs} role='tablist'>
        {items.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            className={classNames(cls.Tab, {
              [cls.TabActive]: index === activeIndex,
            })}
            onClick={() => handleTabClick(index)}
            role='tab'
            aria-selected={index === activeIndex}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}>
            {item.label}
          </button>
        ))}
      </div>

      {items.length > 0 && (
        <div
          id={`tabpanel-${activeIndex}`}
          role='tabpanel'
          aria-labelledby={`tab-${activeIndex}`}
          className={cls.TabDescription}>
          {items[activeIndex]?.description}
        </div>
      )}
    </div>
  );
};

TabsBase.displayName = 'TabsBase';
