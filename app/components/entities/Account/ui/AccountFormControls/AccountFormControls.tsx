import { ButtonBase } from '@shared/ButtonBase';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import cls from './AccountFormControls.module.scss';

interface AccountFormControlsProps {
  backBtn?: string;
  saveBtn?: string;
  handlePrev: () => void;
}

export const AccountFormControls: FC<AccountFormControlsProps> = (props) => {
  const { saveBtn, backBtn, handlePrev } = props;
  const t = useTranslations('base');

  return (
    <div className={cls.AccountFormControls}>
      <ButtonBase
        type='button'
        variant='secondary'
        onClick={() => handlePrev()}>
        <span className='icon-arrow-left2' />
        {backBtn || t('back')}
      </ButtonBase>
      <ButtonBase type='submit'>{saveBtn || t('save')}</ButtonBase>
    </div>
  );
};

AccountFormControls.displayName = 'AccountFormControls';
