import { CSSObject } from '@emotion/styled';

interface ISelect {
  isDisabled?: boolean;
  isActive?: boolean;
  isSelected?: boolean;
  isFocused?: boolean;
}

const controlBackground = ({ isDisabled }: ISelect) : string => {
  if (isDisabled) {
    return 'var(--input-disabled)';
  }

  return 'transparent';
}

export const InputSelectStyles = {
  control (
    baseStyles: CSSObject, { isFocused, isDisabled }: ISelect) {
    const borderColor = isFocused ? 'var(--input-border-focus)' : 'var(--color-primary)';
    return {
      ...baseStyles,
      borderRadius: 0,
      borderColor,
      minHeight: 'var(--input-size)',
      boxShadow: 'none',
      backgroundColor: controlBackground({ isDisabled }),
      cursor: 'pointer',
      '&:hover': {
        borderColor
      },
    }
  },
  menu (baseStyles: CSSObject) {
    return {
      ...baseStyles,
      boxShadow: 'none',
      border: 'var(--input-border)',
      borderRadius: 0
    }
  },
  option(baseStyles:CSSObject, { isFocused, isSelected }: ISelect) {
    return {
      ...baseStyles,
      cursor: 'pointer',
      backgroundColor: isSelected ? 'var(--input-border-focus)' : 'initial',
      ':active': {
        backgroundColor: 'var(--input-border-focus)'
      },
      ...(isFocused && {
        color: 'var(--color-white)',
        backgroundColor: 'var(--input-border-focus)'
      }),
    };
  },
  placeholder (baseStyles: CSSObject) {
    return {
      ...baseStyles,
      color: 'var(--input-placeholder)'
    }
  },
  dropdownIndicator (baseStyles: CSSObject, { isFocused }: ISelect) {
    return {
      ...baseStyles,
      color: 'var(--color-primary)',
      ...(isFocused && {
        color: 'var(--input-border-focus)'
      }),
    }
  },
  indicatorSeparator (baseStyles: CSSObject, { isFocused }: ISelect) {
    return {
      ...baseStyles,
      backgroundColor: 'var(--color-primary)',
      ...(isFocused && {
        backgroundColor: 'var(--input-border-focus)'
      }),
    }
  },
  clearIndicator (baseStyles: CSSObject, { isFocused }: ISelect) {
    return {
      ...baseStyles,
      color: 'var(--color-primary)',
      ...(isFocused && {
        color: 'var(--input-border-focus)'
      }),
    }
  },
  loadingIndicator (baseStyles: CSSObject, { isFocused }: ISelect) {
    return {
      ...baseStyles,
      color: 'var(--color-primary)',
      ...(isFocused && {
        color: 'var(--input-border-focus)'
      }),
    }
  },
  multiValueLabel (baseStyles: CSSObject) {
    return {
      ...baseStyles,
      backgroundColor: 'var(--input-select-multi-item)',
      color: 'var(--color-text)'
    }
  },
  multiValueRemove (baseStyles: CSSObject, { isFocused }: ISelect) {
    return {
      ...baseStyles,
      backgroundColor: 'var(--input-select-multi-item)',
      color: 'var(--color-text)',
      ...(isFocused && {
        color: 'var(--color-danger)',
        backgroundColor: 'var(--color-danger-hover)'
      }),
    }
  }
}