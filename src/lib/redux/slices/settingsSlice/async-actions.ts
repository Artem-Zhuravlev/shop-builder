import type { ReduxState } from '../../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getApiSettings,
	updateApiSettings,
} from '@/components/shared/api/admin';
import type { SettingsInterface } from '@interfaces/settings';

export const getSettings = createAsyncThunk(
	'settings/getSettings',
	async (_, thunkApi) => {
		const { rejectWithValue, getState } = thunkApi;

		try {
			const response = await getApiSettings();
			const state = getState() as ReduxState;

			if (state.settings.data !== null) {
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

export const updateSettings = createAsyncThunk(
	'settings/updateSettings',
	async (data: SettingsInterface, thunkApi) => {
		const { rejectWithValue } = thunkApi;

		try {
			const response = await updateApiSettings(data);

			if (!response) {
				return rejectWithValue('No settings found');
			}

			return response.data;
		} catch (e) {
			console.error('Failed to fetch settings:', e);
			return rejectWithValue('Error fetching settings');
		}
	},
);
