import type { SettingsInterface } from '@interfaces/settings';
import { createSlice } from '@reduxjs/toolkit';
import { getSettings, updateSettings } from './async-actions';

const initialState: SettingsSliceState = {
	data: null,
	isLoading: false,
	error: undefined,
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getSettings.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(getSettings.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(getSettings.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
		builder
			.addCase(updateSettings.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(updateSettings.fulfilled, (state, action) => {
				state.data = action.payload;
				state.isLoading = false;
			})
			.addCase(updateSettings.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
	},
});

/* Types */
export interface SettingsSliceState {
	data: SettingsInterface | null;
	isLoading: boolean;
	error: string | undefined;
}

export const { reducer: settingsReducer } = settingsSlice;
export const { reducer: settingsActions } = settingsSlice;
