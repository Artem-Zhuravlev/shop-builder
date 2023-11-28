import React, { FC, useState } from 'react';
import cls from './HeaderBurger.module.scss';
import { classNames } from '@/app/utils/classNames/classNames';
import { useTranslations } from 'next-intl';

interface HeaderBurgerProps {
  toggleBurger: (isActive: boolean) => void
}

export const HeaderBurger:FC<HeaderBurgerProps> = (props) => {
  const { toggleBurger } = props

  const t = useTranslations();

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(prev => !prev)
    toggleBurger(isActive)
  }

  const mods: Record<string, boolean> = {
    [cls.HeaderBurgerActive]: isActive,
  };

  return (
    <button
      type="button"
      className={classNames(cls.HeaderBurger, mods)}
      aria-label={t('base.burger_label')}
      onClick={handleClick}
    >
      <span></span>
    </button>
  )
}