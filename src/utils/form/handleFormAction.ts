/**
 * Handles form submission by either creating a new record or editing based on a dynamic slug.
 *
 * @template T - The type of data being passed to the callbacks.
 * @param {('new' | string | string[])} action - The action to perform: 'new' for creating, or a dynamic slug for editing.
 * @param {T} data - The data to be used in the operation.
 * @param {(value: T) => Promise<T>} createCallback - The callback function to handle the creation logic.
 * @param {(value: T, id: typeof action) => Promise<T>} editCallback - The callback function to handle the editing logic.
 * @returns {Promise<T>} - A promise that resolves with the result of the operation (either create or edit).
 */
export const handleFormAction = async <T>(
	action: 'new' | string | string[] | number,
	data: T,
	createCallback: (value: T) => Promise<T>,
	editCallback: (value: T, id: number) => Promise<T>,
): Promise<T> => {
	if (action === 'new') {
		return await createCallback(data);
	}

	return await editCallback(data, action as number);
};
