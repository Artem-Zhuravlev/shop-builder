import React, { FC } from 'react';
import Select from 'react-select';
import { GroupBase, OptionsOrGroups  } from 'react-select';
import { InputSelectStyles } from './InputSelectStyles';

interface SelectProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  options: OptionsOrGroups<Option, Group>;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: IsMulti;
}

export const InputSelect: FC<SelectProps> = (props) => {
  const {
    options,
    isDisabled,
    isLoading,
    isClearable,
    isSearchable,
    isMulti
  } = props;

  return (
    <Select
      styles={InputSelectStyles}
      options={options}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isMulti={isMulti}
    />
  );
};
