'use client';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import { type FC, type ReactNode, useState } from 'react';
import cls from './SideDrawer.module.scss';

interface SideDrawerProps {
  children: ReactNode;
  title?: string;
  visible: boolean;
  drawerClose: (visible: boolean) => void;
  controls?: ReactNode;
}

export const SideDrawer: FC<SideDrawerProps> = (props) => {
  const { children, title, visible, drawerClose, controls } = props;
  const [open, setOpen] = useState(visible);
  const t = useTranslations('base');

  const onDrawerClose = () => {
    setOpen(false);
    drawerClose(false);
  };

  const sideDrawerClasses = classNames(
    cls.SideDrawer,
    open ? cls.SideDrawerOpen : null,
  );

  return (
    <div data-testid='side-drawer' className={sideDrawerClasses}>
      <button
        data-testid='close-button'
        type='button'
        className={cls.SideDrawerClose}
        onClick={onDrawerClose}
        aria-label={t('close')}>
        <span className='icon-cross' />
      </button>
      {title && (
        <header className={cls.SideDrawerHeader}>
          <h4 className={cls.SideDrawerTitle}>{title}</h4>
        </header>
      )}
      <div className={cls.SideDrawerContent} tabIndex={0}>
        {children}
      </div>
      {controls && <div className={cls.SideDrawerControls}>{controls}</div>}
    </div>
  );
};

SideDrawer.displayName = 'SideDrawer';
