import React, { useRef, useEffect, ReactNode } from 'react';
import { useForm, useFormState } from 'react-final-form';

type SaveFunction = (attributes: Record<string, any>) => Promise<any> | void;
type ErrorHandler = (error: any) => void;

interface AutoSaveProps {
	children?: ReactNode;
	debounce?: number;
	mutation?: any;
	onCompleted?: () => void;
	onError?: ErrorHandler;
	save: SaveFunction;
}

const noop = () => {};

const useAutoSave = ({
	debounce = 1000,
	mutation,
	save,
	onCompleted = noop,
	onError = noop,
}: AutoSaveProps) => {
	const firstRun = useRef(true);
	const timeout = useRef<NodeJS.Timeout | null>(null);
	const { values, modified } = useFormState<Record<string, any>>({
		subscription: {
			values: true,
			modified: true,
		},
	});
	const { mutators } = useForm();

	useEffect(() => {
		if (firstRun.current) {
			firstRun.current = false;
		} else {
			// Clear any pending timeout to reset the debounce
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
			// Schedule a save after the debounce time
			timeout.current = setTimeout(() => {
				const attributes = Object.keys(modified || {}).reduce(
					(acc, key) => {
						acc[key] = '';
						return acc;
					},
					{} as Record<string, any>
				);
				Object.assign(attributes, values);
				return Promise.resolve(save(attributes)).then((errors) => {
					if (errors) mutators.setErrors(errors);
					onCompleted();
				}, onError);
			}, debounce);
		}
	}, [values, debounce, modified, mutators, save, onCompleted, onError]);
};

export const AutoSave: React.FC<AutoSaveProps> = ({ children, ...options }) => {
	useAutoSave(options);
	return null;
};
