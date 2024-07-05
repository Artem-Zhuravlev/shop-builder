import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { InputSelect } from '../InputSelect/InputSelect';

interface InputLanguageProps {
  name: string;
}

export const InputLanguage: FC<InputLanguageProps> = (props) => {
  const { name } = props;
  const t = useTranslations();
  // TODO: Add languages API

  return (
    <InputSelect
      name={name}
      options={[
        { value: 'en', label: 'English' },
        { value: 'ua', label: 'Ukrainian' },
      ]}
      placeholder={t('inputs.choose_language')}
    />
  );
};
