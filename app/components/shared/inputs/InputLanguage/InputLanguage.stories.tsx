import { AutoSave } from '@shared/inputs';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputLanguage } from './InputLanguage';

export default {
  title: 'Shared/Inputs/InputLanguage',
  component: InputLanguage,
} as Meta<typeof InputLanguage>;

const Template: StoryFn<typeof InputLanguage> = (args) => {
  const onSubmit = (values: any) => {
    action('onSubmit')(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <>
          <div>
            <AutoSave debounce={0} save={handleSubmit} />
            <InputLanguage {...args} />
          </div>
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'select',
};
