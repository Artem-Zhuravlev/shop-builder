/* Instruments */
import { productSlice, settingsSlice } from './slices';

export const reducer = {
	product: productSlice.reducer,
	settings: settingsSlice.reducer,
};
