import { useTranslations } from 'next-intl';
import { useEffect, useState, type FC } from 'react';
import cls from './LanguageTabs.module.scss';

interface LanguageTabsProps {
  activeTab?: number;
  items: string[];
  onSelect?: (value: string) => void;
}

export const LanguageTabs: FC<LanguageTabsProps> = (props) => {
  const { activeTab = 0, items, onSelect } = props;
  const t = useTranslations('languages');
  const initialActiveTab =
    activeTab >= items.length ? items.length - 1 : activeTab;
  const [value, setValue] = useState(initialActiveTab);

  useEffect(() => {
    setValue(initialActiveTab);
  }, [initialActiveTab]);

  const handleTabClick = (item: string, index: number) => {
    setValue(index);

    if (onSelect) onSelect(item);
  };

  return (
    <div className={cls.LanguageTabs}>
      {items.map((item, index) => {
        const tabClasses = [cls.LanguageTabsItem];
        if (index === value) {
          tabClasses.push(cls.LanguageTabsItemActive);
        }

        return (
          <button
            type='button'
            key={item}
            className={tabClasses.join(' ')}
            onClick={() => handleTabClick(item, index)}>
            <span className={`${cls.flag} ${cls[`flag-${item}`]}`} />
            {t(item)}
          </button>
        );
      })}
    </div>
  );
};
