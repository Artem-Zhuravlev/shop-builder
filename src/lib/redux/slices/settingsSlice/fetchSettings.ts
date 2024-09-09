import type { ReduxState } from './../../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiSettings } from '@/components/shared/api/admin';

export const fetchSettings = createAsyncThunk(
	'settings/fetchSettings',
	async (_, thunkApi) => {
		const { rejectWithValue, getState } = thunkApi;

		try {
			const response = await getApiSettings();
			const state = getState() as ReduxState;

			if (state.settings.data) {
				return state.settings.data;
			}

			if (!response) {
				return rejectWithValue('No settings found');
			}

			return response;
		} catch (e) {
			console.error('Failed to fetch settings:', e);
			return rejectWithValue('Error fetching settings');
		}
	},
);
