import { AutoSave } from '@shared/inputs';
import { action as addonAction } from '@storybook/addon-actions';
import type { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputSizes } from './InputSizes';

export default {
  title: 'Shared/Inputs/InputSizes',
  component: InputSizes,
} as Meta<typeof InputSizes>;

const Template: StoryFn<typeof InputSizes> = (args) => {
  const onSubmit = (value: any) => {
    addonAction('onSelectedSize')(value);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <div>
          <AutoSave save={handleSubmit} debounce={0} />
          <InputSizes {...args} />
        </div>
      )}
    />
  );
};

const items = ['L', 'M', 'S', 'XL', 'XXL'];

export const Default = Template.bind({});
Default.args = {
  items,
};

export const WithRadioInputs = Template.bind({});
WithRadioInputs.args = {
  type: 'radio',
  items,
};
