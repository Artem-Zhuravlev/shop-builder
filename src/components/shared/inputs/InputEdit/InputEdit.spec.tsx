import '@testing-library/jest-dom';
import { customRender } from '@/utils/intlWrapper/IntlWrapper';
import { EditorState } from 'draft-js';
import { Form } from 'react-final-form';
import { InputEdit } from './InputEdit';

// Mocked EditorState and onEditorStateChange
const mockEditorState = EditorState.createEmpty();
const mockOnEditorStateChange = jest.fn();

describe('InputEdit Component', () => {
	it('renders the editor with initial value if value is provided', () => {
		const { container } = customRender(
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputEdit
							name='edit'
							onEditorStateChange={mockOnEditorStateChange}
						/>
					</form>
				)}
			</Form>,
		);

		const editor = container.querySelector('.rdw-editor-main') as HTMLElement;
		expect(editor).toBeInTheDocument();
	});

	it('triggers onEditorStateChange when editor state changes', () => {
		customRender(
			<Form onSubmit={() => {}}>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputEdit
							name='edit'
							onEditorStateChange={mockOnEditorStateChange}
						/>
					</form>
				)}
			</Form>,
		);

		const updatedEditorState = EditorState.createEmpty();
		mockOnEditorStateChange(updatedEditorState);

		expect(mockOnEditorStateChange).toHaveBeenCalledWith(updatedEditorState);
	});
});
