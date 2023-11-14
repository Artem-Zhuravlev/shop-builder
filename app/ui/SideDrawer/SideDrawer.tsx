import React, { FC, ReactNode, useState } from 'react';
import cls from './SideDrawer.module.scss';
import { classNames } from '../../utils/classNames/classNames';
import { HeadingBase } from '../HeadingBase';

interface SideDrawerProps {
  children: ReactNode;
  title?: string;
  visible: boolean;
  drawerClose: (visible: boolean) => void;
}

export const SideDrawer:FC<SideDrawerProps> = (props) => {
  const { children, title, visible, drawerClose } = props; 

  const [open, setOpen] = useState(visible);

  const onDrawerClose = () => {
    setOpen(false);
    drawerClose(false)
  }

  const mods: Record<string, boolean> = {
    [cls.SideDrawerOpen]: open || false,
  };


  return (
    <div
      data-testid="side-drawer"
      className={classNames(cls.SideDrawer, mods)}
    >
      <button
        data-testid="close-button"
        type="button"
        className={cls.SideDrawerClose}
        onClick={onDrawerClose}
      >
        <span className="icon-cross" />
      </button>
      {
        title && (
          <HeadingBase
            level={4}
            additionalClass={cls.SideDrawerTitle}
          >
            {title}
          </HeadingBase>
        )
      }
      <div
        className={cls.SideDrawerContent}
      >
        { children }
      </div>
    </div>
  )
}