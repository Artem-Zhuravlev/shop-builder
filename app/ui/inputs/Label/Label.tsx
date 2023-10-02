import React, { ReactNode, FC, useState } from 'react';
import cls from './Label.module.scss';

interface LabelProps {
  children: ReactNode;
  name: string;
  onSuffixClick?: () => void;
}

export const Label:FC<LabelProps> = ({
  children,
  name,
  onSuffixClick
}) => {
  const [showEyeIcon, setShowEyeIcon] = useState(true);

  const toggleEyeIcon = () => {
    if (onSuffixClick) {
      setShowEyeIcon(!showEyeIcon);
      onSuffixClick();
    }
  };

  return (
    <label
      className={cls.Label}
    >
      <div
        className={cls.LabelName}
      >{name}</div>
      {children}
      {
        onSuffixClick && (
          <button
            type="button"
            className={cls.LabelSuffix}
            onClick={toggleEyeIcon}
          >
            {
              showEyeIcon
              ? (<span className="icon-eye-blocked"></span>) 
              : (<span className="icon-eye"></span>)
            }
          </button>
        )
      }
    </label>
  )
}