import type { SettingsInterface } from '@interfaces/settings';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '../../interfaces/thunk.interface';
import { getApiSettings } from '@/components/shared/api/admin';

export const fetchSettings = createAsyncThunk(
	'settings/fetchSettings',
	async (_, thunkApi) => {
		const { rejectWithValue } = thunkApi;

		try {
			const response = await getApiSettings();

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
