import type { SettingsInterface } from '@interfaces/settings';

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
	id: number,
	data: SettingsInterface,
): Promise<SettingsResponse> => {
	const response = await fetch(`/api/settings/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	console.log(response);

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.message || 'Failed to update settings');
	}

	return (await response.json()) as SettingsResponse;
};
