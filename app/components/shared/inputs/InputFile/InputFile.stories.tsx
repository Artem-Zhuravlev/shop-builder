import { ButtonBase } from '@shared/ButtonBase';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputFile, type InputProps } from './InputFile';

export default {
  title: 'Shared/Inputs/InputFile',
  component: InputFile,
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as Meta<typeof InputFile>;

interface InputStoryProps extends InputProps {
  field?: string;
}

const Template: StoryFn<InputStoryProps> = (args) => {
  const onSubmit = (values: any) => {
    action('submit')(values);
  };

  return (
    <Form onSubmit={onSubmit} initialValues={{ field: args.field }}>
      {({ handleSubmit }) => (
        <>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}>
            <InputFile {...args} />
            <ButtonBase type='submit'>Submit</ButtonBase>
          </form>
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'field',
};

export const WithOtherButtonText = Template.bind({});
WithOtherButtonText.args = {
  placeholder: 'File',
  name: 'field',
};
