import { TranslateFunction } from './types/TranslateFunction';

export const commentValidate = (
	value: string,
	t: TranslateFunction
): string | void => {
	if (value && value.length >= 25 && value.length <= 1000) {
		return;
	} else {
		return t('field_error.comment_not_valid');
	}
};
