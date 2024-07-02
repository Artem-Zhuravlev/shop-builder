import { getValidationMessage } from '@utils/validations';
import { ValidationHandler } from '@utils/validations/types';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC, ReactNode, useRef, useState } from 'react';
import { Field } from 'react-final-form';
import { ButtonBase } from '../../ButtonBase';
import { Label } from '../Label/Label';

export interface InputProps {
  children?: ReactNode;
  className?: string;
  name: string;
  required?: boolean;
  validationHandler?: ValidationHandler;
}

export const InputFile: FC<InputProps> = (props) => {
  const {
    children,
    className,
    name,
    required = false,
    validationHandler,
  } = props;

  const t = useTranslations();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState(children ?? t('base.upload_a_file'));

  const handleClick = (): void => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    input: any,
  ): void => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFileName(file.name);
        input.onChange(file);
      };
      reader.readAsDataURL(file);
    } else {
      console.error('No file selected.');
    }
  };

  const renderInputField = ({ input, meta }: any) => {
    setError(!!meta.error && meta.touched && meta.submitFailed);
    setErrorMessage(meta.error || '');

    return (
      <>
        <ButtonBase onClick={handleClick} data-testid='file-input'>
          {fileName}
        </ButtonBase>
        <input
          type='file'
          ref={hiddenFileInput}
          style={{ display: 'none' }}
          onChange={(e) => handleChange(e, input)}
        />
      </>
    );
  };

  return (
    <Label hasError={error} error={errorMessage} className={className}>
      <Field
        name={name}
        validate={(value) =>
          getValidationMessage(value, required, t, validationHandler)
        }>
        {renderInputField}
      </Field>
    </Label>
  );
};

InputFile.displayName = 'InputFile';
