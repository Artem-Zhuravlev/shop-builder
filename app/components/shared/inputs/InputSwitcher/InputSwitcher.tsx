import React, { FC, useState } from 'react';
import classNames from 'classnames';
import cls from './InputSwitcher.module.scss';

interface InputSwitcherProps {
	value: boolean;
	onSwitch: (e: boolean) => void;
}

export const InputSwitcher: FC<InputSwitcherProps> = (props) => {
	const { value = false, onSwitch } = props;

	const [switcherValue, setSwitcherValue] = useState<boolean>(value);

	const inputSwitcherClasses = classNames(
		cls.InputSwitcher,
		switcherValue ? cls.checked : null
	);

	const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.checked;
		setSwitcherValue(newValue);
		onSwitch(newValue);
	};

	return (
		<label
			data-testid='input-switcher'
			className={inputSwitcherClasses}>
			<input
				checked={switcherValue}
				onChange={handleSwitchChange}
				type='checkbox'
			/>
		</label>
	);
};
