/* Instruments */
import { counterSlice } from './slices';
import { productSlice } from './slices';

export const reducer = {
	counter: counterSlice.reducer,
	product: productSlice.reducer,
};
