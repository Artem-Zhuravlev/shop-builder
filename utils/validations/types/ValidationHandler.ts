import { TranslateFunction } from './TranslateFunction';

export type ValidationHandler = (
	value: string | { value: string | number } | number,
	t: TranslateFunction,
	additionalValue?: string
) => string | void;
