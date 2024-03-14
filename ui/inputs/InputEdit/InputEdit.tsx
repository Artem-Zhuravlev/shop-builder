import React, { FC, useEffect } from 'react';
import { Editor, EditorProps } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import cls from './InputEdit.module.scss';

interface InputEditProps extends EditorProps {
  onEditorStateChange: (editorState: EditorState) => void;
  value: EditorState;
}

export const InputEdit:FC<InputEditProps> = (props) => {
  const {
    onEditorStateChange,
    value
  } = props;

  useEffect(() => {
    if (!value) {
      onEditorStateChange(EditorState.createEmpty());
    }
  }, [value, onEditorStateChange]);

  const handleEditorStateChange = (newEditorState: EditorState) => {
    onEditorStateChange(newEditorState);
  };

  return (
    <Editor
      editorState={value}
      toolbarClassName={cls.InputEditToolbar}
      editorClassName={cls.InputEditEditor}
      onEditorStateChange={handleEditorStateChange}
    />
  )
}