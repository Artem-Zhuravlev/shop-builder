import { CSSObject } from '@emotion/styled';

interface ISelect {
	isDisabled?: boolean;
	isActive?: boolean;
	isSelected?: boolean;
	isFocused?: boolean;
}

const controlBackground = ({ isDisabled }: ISelect): string => {
	if (isDisabled) {
		return 'var(--input-disabled)';
	}

	return 'transparent';
};

export const InputSelectStyles = {
	control(baseStyles: CSSObject, { isFocused, isDisabled }: ISelect) {
		const borderColor = isFocused ? 'var(--gray-50)' : 'var(--gray-40)';
		return {
			...baseStyles,
			borderRadius: 'var(--interface-size-sm)',
			borderColor,
			minHeight: 'var(--input-height)',
			boxShadow: 'none!important',
			backgroundColor: controlBackground({ isDisabled }),
			fontSize: 'var(--font-size-md)',
			cursor: 'pointer',
			'&:hover': {
				borderColor,
			},
		};
	},
	menu(baseStyles: CSSObject) {
		return {
			...baseStyles,
			boxShadow: 'none',
			border: '1px solid var(--gray-40)',
			borderRadius: 'var(--interface-size-sm)',
		};
	},
	option(baseStyles: CSSObject, { isFocused, isSelected }: ISelect) {
		return {
			...baseStyles,
			cursor: 'pointer',
			backgroundColor: isSelected ? 'var(--primary-focus)' : 'initial',
			color: 'var(--gray-90)',
			':active': {
				backgroundColor: 'var(--primary-focus)',
				color: 'var(--gray-90)',
			},
			...(isFocused && {
				color: 'var(--gray-10)',
				backgroundColor: 'var(--primary-main)',
			}),
		};
	},
	placeholder(baseStyles: CSSObject) {
		return {
			...baseStyles,
			color: 'var(--gray-60)',
			fontSize: 'var(--font-size-md)',
		};
	},
	input(baseStyles: CSSObject) {
		return {
			...baseStyles,
			color: 'var(--gray-90)',
			fontSize: 'var(--font-size-md)',
		};
	},
	dropdownIndicator(baseStyles: CSSObject, { isFocused }: ISelect) {
		return {
			...baseStyles,
			color: 'var(--gray-40)',
			...(isFocused && {
				color: 'var(--gray-50)',
			}),
		};
	},
	indicatorSeparator(baseStyles: CSSObject, { isFocused }: ISelect) {
		return {
			...baseStyles,
			backgroundColor: 'var(--gray-40)',
			...(isFocused && {
				backgroundColor: 'var(--gray-50)',
			}),
		};
	},
	clearIndicator(baseStyles: CSSObject, { isFocused }: ISelect) {
		return {
			...baseStyles,
			color: 'var(--gray-40)',
			...(isFocused && {
				color: 'var(--gray-50)',
			}),
		};
	},
	loadingIndicator(baseStyles: CSSObject, { isFocused }: ISelect) {
		return {
			...baseStyles,
			color: 'var(--gray-40)',
			...(isFocused && {
				color: 'var(--gray-50)',
			}),
		};
	},
	multiValueLabel(baseStyles: CSSObject) {
		return {
			...baseStyles,
			backgroundColor: 'var(--gray-40)',
			color: 'var(--gray-90)',
		};
	},
	multiValueRemove(baseStyles: CSSObject, { isFocused }: ISelect) {
		return {
			...baseStyles,
			backgroundColor: 'var(--gray-40)',
			color: 'var(--gray-90)',
			...(isFocused && {
				color: 'var(--danger-main)',
				backgroundColor: 'var(--danger-focus)',
			}),
		};
	},
};
