import { ContainerBase } from '@shared/ContainerBase';
import { FC, ReactNode } from 'react';
import cls from './AdminAuthWrapper.module.scss';

interface AdminAuthWrapperProps {
  children: ReactNode;
}

export const AdminAuthWrapper: FC<AdminAuthWrapperProps> = (props) => {
  const { children } = props;

  return (
    <div className={cls.AdminAuthWrapper}>
      <ContainerBase small className={cls.AdminAuthContainer}>
        {children}
      </ContainerBase>
    </div>
  );
};

AdminAuthWrapper.displayName = 'AdminAuthWrapper';
