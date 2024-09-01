import { TranslateFunction } from './types/TranslateFunction';

export const nameValidate = (
	value: string,
	t: TranslateFunction
): string | void => {
	if (value && value.length >= 3 && value.length <= 25) {
		return;
	} else {
		return t('field_error.name_not_valid');
	}
};
