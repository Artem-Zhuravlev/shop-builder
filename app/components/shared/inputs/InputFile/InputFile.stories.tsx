import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { InputFile } from './InputFile';

export default {
  title: 'Shared/Inputs/InputFile',
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
    onHandleFileAction('handleFile');
  };

  return <InputFile handleFile={onHandleFile}>{args.children}</InputFile>;
};

export const Default = Template.bind({});
Default.args = {
  children: 'File',
};
