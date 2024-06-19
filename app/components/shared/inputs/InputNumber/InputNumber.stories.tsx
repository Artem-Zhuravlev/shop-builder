import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import AutoSave from '../AutoSave/AutoSave';
import { InputNumber } from './InputNumber';

export default {
  title: 'Shared/Inputs/InputNumber',
  component: InputNumber,
  argTypes: { onNumberChange: { action: 'number change' } },
} as Meta<typeof InputNumber>;

const Template: StoryFn<typeof InputNumber> = (args) => {
  const onSubmit = (value: any) => {
    console.log(value);
    action('onChangeNumber')(value);
  };

  return (
    <Form
      initialValues={{ number_field: 0 }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <div>
          <AutoSave save={handleSubmit} debounce={0} />
          <InputNumber {...args} />
        </div>
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 10,
  name: 'number_field',
};
