/**
 * Fetches preselected form data based on the provided ID.
 *
 * @param { 'new' | string | string[] | number } id - The ID of the item to fetch or 'new' for a new item.
 * @param {(id: number) => Promise<T>} getCallback - A callback function that fetches data based on the ID.
 * @returns {Promise<T> | undefined} The fetched data or undefined if the ID is 'new'.
 * @throws {Error} Throws an error if the fetch operation fails.
 *
 * @example
 * const formData = await fetchPreselectedForm(1, getFormData);
 */
export const fetchPreselectedForm = async <T>(
	id: 'new' | string | string[] | number,
	getCallback: (id: number) => Promise<T>,
): Promise<T | undefined> => {
	// Return undefined if the ID is 'new'
	if (id === 'new') return;

	// Ensure that id is a valid number before calling getCallback
	const numericId = Array.isArray(id) ? Number(id[0]) : Number(id);

	if (Number.isNaN(numericId)) {
		throw new Error('Invalid ID provided');
	}

	try {
		const data = await getCallback(numericId);
		return data;
	} catch (error) {
		throw new Error(
			`Error fetching preselected form data: ${error instanceof Error ? error.message : 'Unknown error'}`,
		);
	}
};
