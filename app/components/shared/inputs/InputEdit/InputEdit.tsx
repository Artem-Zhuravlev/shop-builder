import React, { FC, useState, useEffect } from 'react';
import { Editor, EditorProps } from 'react-draft-wysiwyg';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { ValidationHandler } from '@utils/validations/types';
import cls from './InputEdit.module.scss';
import { Label } from '../Label/Label';
import { useTranslations } from 'next-intl';
import { Field } from 'react-final-form';
import { getValidationMessage } from '@utils/validations';

interface InputEditProps extends EditorProps {
	className?: string;
	name: string;
	required?: boolean;
	validationHandler?: ValidationHandler;
}

export const InputEdit: FC<InputEditProps> = (props) => {
	const {
		className,
		name,
		required = false,
		placeholder,
		validationHandler,
	} = props;

	const t = useTranslations();
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const renderInputField = ({ input, meta }: any) => {
		const [editorState, setEditorState] = useState(EditorState.createEmpty());

		useEffect(() => {
			if (input.value) {
				const contentBlock = htmlToDraft(input.value);
				if (contentBlock) {
					const contentState = ContentState.createFromBlockArray(
						contentBlock.contentBlocks
					);
					const initialEditorState =
						EditorState.createWithContent(contentState);
					setEditorState(initialEditorState);
				}
			}
		}, [input.value]);

		setError(!!meta.error && meta.touched && meta.submitFailed);
		setErrorMessage(meta.error || '');

		const onEditorStateChange = (editorState: EditorState) => {
			setEditorState(editorState);
			return input.onChange(
				draftToHtml(convertToRaw(editorState.getCurrentContent()))
			);
		};

		return (
			<Editor
				editorState={editorState}
				toolbarClassName={cls.InputEditToolbar}
				editorClassName={cls.InputEditEditor}
				onEditorStateChange={onEditorStateChange}
				placeholder={required ? `${placeholder} *` : placeholder}
			/>
		);
	};

	return (
		<Label
			hasError={error}
			error={errorMessage}
			className={className}>
			<Field
				name={name}
				validate={(value) =>
					getValidationMessage(value, required, t, validationHandler)
				}>
				{renderInputField}
			</Field>
		</Label>
	);
};

InputEdit.displayName = 'InputEdit';
