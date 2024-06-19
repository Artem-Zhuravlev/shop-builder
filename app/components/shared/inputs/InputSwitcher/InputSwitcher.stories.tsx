import { AutoSave } from '@shared/inputs';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputSwitcher } from './InputSwitcher';

export default {
  title: 'Shared/Inputs/InputSwitcher',
  component: InputSwitcher,
} as Meta<typeof InputSwitcher>;

const Template: StoryFn<typeof InputSwitcher> = (args) => {
  const handleSubmit = (value: any) => {
    action('onSubmit')(value);
  };

  return (
    <div style={{ width: '300px' }}>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <div>
            <AutoSave save={handleSubmit} debounce={0} />
            <InputSwitcher {...args} />
          </div>
        )}
      </Form>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'switcher',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'switcher',
  label: 'Switcher',
};
