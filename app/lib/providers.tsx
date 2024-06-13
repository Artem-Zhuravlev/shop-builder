'use client';

/* Core */
import { Provider } from 'react-redux';
import React from 'react';

/* Instruments */
import { reduxStore } from '@lib/redux';
import { ModalProvider } from './modalProvider/ModalContext';

export const Providers = (props: React.PropsWithChildren) => {
	return (
		<Provider store={reduxStore}>
			<ModalProvider>{props.children}</ModalProvider>
		</Provider>
	);
};
