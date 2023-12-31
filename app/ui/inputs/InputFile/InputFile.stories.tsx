import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { InputFile } from './InputFile';
import { action } from '@storybook/addon-actions';

export default {
  title: 'inputs/InputFile',
  component: InputFile,
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as Meta<typeof InputFile>;

const Template: StoryFn<typeof InputFile> = (args) => {
  const onHandleFileAction = action('handleFile');

  const onHandleFile = () => {
    onHandleFileAction('handleFile')
  }

  return(
    <InputFile
      handleFile={onHandleFile}
    >
      {args.children}
    </InputFile>
  )
};

export const Default = Template.bind({});
Default.args = {
  children: 'File'
};