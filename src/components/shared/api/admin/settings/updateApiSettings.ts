import type { SettingsInterface } from '@interfaces/index';

interface SettingsResponse {
	message: string;
}
/**
 * Updates the settings in the API.
 *
 * @param {AdminSettingsTableItem} data - The settings data to be updated.
 * @returns {Promise<SettingsResponse>} The response from the API after updating the settings.
 * @throws {Error} Throws an error if the update fails, containing the error message from the API.
 */
export const updateApiSettings = async (
	data: SettingsInterface,
): Promise<{ id: string | number; data: SettingsInterface }> => {
	try {
		const response = await fetch('/api/settings', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || 'Failed to update settings');
		}

		const result = await response.json();

		// Ensure that the returned data matches the expected structure
		return { id: result.id, data: result.data };
	} catch (error) {
		console.error('Error updating settings:', error);
		throw new Error('An error occurred while updating settings.');
	}
};
