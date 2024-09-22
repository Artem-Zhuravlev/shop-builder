import type { TranslateFunction } from './types/TranslateFunction';

export const isoCode2Validate = (
	value: string,
	t: TranslateFunction,
): string | undefined => {
	if (!value) {
		return undefined;
	}

	if (!/^[A-Za-z]+$/.test(value)) {
		return t('field_error.only_characters');
	}

	if (value.length !== 2) {
		return t('field_error.iso_code_2');
	}

	return;
};
