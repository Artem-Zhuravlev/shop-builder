import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import cls from './InputRadio.module.scss';

interface InputRadioGroupProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export const InputRadioGroup: FC<InputRadioGroupProps> = (props) => {
  const { children, className, title } = props;

  return (
    <div className={classNames(cls.InputRadioGroup, className)}>
      <div className='h6'>{title}</div>
      <div className={cls.InputRadioGroupInputs}>{children}</div>
    </div>
  );
};
