import { useTranslations } from 'next-intl';

const t = useTranslations();

export const emailValidate = (value: string):string | void => {
  if (!value) {
    return t('field_error.email_required');
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(value)) {
    return t('field_error.email_not_valid');
  }
}