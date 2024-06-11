import { TranslateFunction } from './TranslateFunction';

export type ValidationHandler = (
	value: any,
	t: TranslateFunction,
	additionalValue?: any
) => string | void;
