import React, { FC, useState } from 'react';
import { classNames } from '@/utils/classNames/classNames';
import cls from './InputSwitcher.module.scss';

interface InputSwitcherProps {
  value: boolean;
  onSwitch: (e: boolean) => void;
}

export const InputSwitcher: FC<InputSwitcherProps> = (props) => {
  const {
    value = false,
    onSwitch
  } = props;

  const [switcherValue, setSwitcherValue] = useState<boolean>(value);

  const mods: Record<string, boolean> = {
    [cls.checked]: switcherValue || false,
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setSwitcherValue(newValue);
    onSwitch(newValue);
  };

  return (
    <label
      data-testid="input-switcher"
      className={classNames(cls.InputSwitcher, mods)}
    >
      <input
        checked={switcherValue}
        onChange={handleSwitchChange}
        type="checkbox"
      />
    </label>
  );
}
