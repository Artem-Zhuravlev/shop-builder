import { TranslateFunction } from './types/TranslateFunction';

export const postCodeValidate = (
	value: string,
	t: TranslateFunction
): string | void => {
	if (value && value.length >= 2 && value.length <= 10) {
		return;
	} else {
		return t('field_error.post_code_not_valid');
	}
};
