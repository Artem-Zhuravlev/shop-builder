/**
 * Fetches the application settings for a specific ID from the API.
 *
 * @param {number} id - The ID of the settings to fetch.
 * @returns {Promise<any>} - A promise that resolves with the settings data.
 * @throws {Error} - Throws an error if the fetch operation fails or the response is not ok.
 */
export const getApiSettingsById = async (id: number) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/settings/${id}`,
			{ method: 'GET' },
		);

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(
				`Failed to fetch settings: ${errorData.message || 'Unknown error'}`,
			);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to fetch settings: ${error.message}`);
		}
		throw new Error('An unknown error occurred while fetching settings.');
	}
};
