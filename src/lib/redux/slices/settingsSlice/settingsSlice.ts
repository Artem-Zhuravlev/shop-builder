import type { SettingsInterface } from '@interfaces/settings';
import { createSlice } from '@reduxjs/toolkit';
import { fetchSettings } from './fetchSettings';

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
			.addCase(fetchSettings.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchSettings.fulfilled, (state, action) => {
				state.isLoading = false;
				if (Array.isArray(action.payload) && action.payload.length > 0) {
					state.data = action.payload[0];
				} else {
					state.data = null;
				}
			})
			.addCase(fetchSettings.rejected, (state, action) => {
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
