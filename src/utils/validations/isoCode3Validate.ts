import type { TranslateFunction } from './types/TranslateFunction';

export const isoCode3Validate = (
	value: string,
	t: TranslateFunction,
): string | undefined => {
	if (!value) {
		return undefined;
	}

	if (!/^[A-Za-z]+$/.test(value)) {
		return t('field_error.only_characters');
	}

	if (value.length !== 3) {
		return t('field_error.iso_code_3');
	}

	return;
};
