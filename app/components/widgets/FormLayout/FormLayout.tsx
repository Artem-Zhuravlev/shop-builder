import { ButtonBase } from '@shared/ButtonBase';
import { useTranslations } from 'next-intl';
import { FC, ReactNode } from 'react';
import cls from './FormLayout.module.scss';

interface FormLayoutProps {
  className?: string;
  children: ReactNode;
  title: string;
  onSubmit: () => void;
  submitText?: string;
  cancelText?: string;
}

export const FormLayout: FC<FormLayoutProps> = (props) => {
  const { className, children, title, onSubmit, submitText, cancelText } =
    props;
  const t = useTranslations('base');

  return (
    <form onSubmit={onSubmit} className={cls.FormLayout}>
      <div className={cls.FormLayoutNav}>
        <h3 className={`h2 ${cls.FormLayoutTitle}`}>{title}</h3>
        <div className={cls.FormLayoutControls}>
          <ButtonBase type='submit'>
            {submitText ? submitText : t('save')}
          </ButtonBase>
          <ButtonBase variant='outline'>
            {cancelText ? cancelText : t('cancel')}
          </ButtonBase>
        </div>
      </div>
      {className ? <div className={className}>{children}</div> : children}
    </form>
  );
};

FormLayout.displayName = 'FormLayout';
