import React, { ReactNode, FC } from 'react';
import cls from './Label.module.scss';

interface LabelProps {
  children: ReactNode;
  name: string;
}

export const Label:FC<LabelProps> = ({ children, name }) => {
  return (
    <label
      className={cls.Label}
    >
      <div
        className={cls.LabelName}
      >{name}</div>
      {children}
    </label>
  )
}