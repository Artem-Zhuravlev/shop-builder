import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputEdit } from './InputEdit';
import { EditorState } from 'draft-js';

export default {
  title: 'inputs/InputEdit',
  component: InputEdit,
} as Meta<typeof InputEdit>;

const Template: StoryFn<typeof InputEdit> = (args) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <InputEdit
      {...args}
      value={editorState}
      onEditorStateChange={(e) => setEditorState(e)}
    />
  )
}

export const Default = Template.bind({});
Default.args = {};