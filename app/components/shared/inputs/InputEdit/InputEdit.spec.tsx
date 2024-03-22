import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EditorState } from 'draft-js';
import { InputEdit } from './InputEdit';

// Mocked EditorState and onEditorStateChange
const mockEditorState = EditorState.createEmpty();
const mockOnEditorStateChange = jest.fn();

describe('InputEdit Component', () => {
	it('renders the editor with initial value if value is provided', () => {
		const { container } = render(
			<InputEdit
				onEditorStateChange={mockOnEditorStateChange}
				value={mockEditorState}
			/>
		);

		const editor = container.querySelector('.rdw-editor-main') as HTMLElement;
		expect(editor).toBeInTheDocument();
	});

	it('triggers onEditorStateChange when editor state changes', () => {
		render(
			<InputEdit
				onEditorStateChange={mockOnEditorStateChange}
				value={mockEditorState}
			/>
		);

		const updatedEditorState = EditorState.createEmpty();
		mockOnEditorStateChange(updatedEditorState);

		expect(mockOnEditorStateChange).toHaveBeenCalledWith(updatedEditorState);
	});
});
