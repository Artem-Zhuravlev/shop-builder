/* Core */
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductSliceState = {
	currency: '₴',
	compare: 0,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
});

/* Types */
export interface ProductSliceState {
	currency: string;
	compare: number;
}
