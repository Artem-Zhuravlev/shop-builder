import { AutoSave } from '@shared/inputs';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputSelect } from './InputSelect';

export default {
  title: 'Shared/Inputs/InputSelect',
  component: InputSelect,
} as Meta<typeof InputSelect>;

const Template: StoryFn<typeof InputSelect> = (args) => {
  const onSubmit = (values: any) => {
    action('onSubmit')(values);
  };

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <>
          <div>
            <AutoSave debounce={0} save={handleSubmit} />
            <InputSelect {...args} />
          </div>
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Custom placeholder',
  name: 'select',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};

export const WithValue = Template.bind({});
WithValue.args = {
  name: 'select',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  value: { value: 'chocolate', label: 'Chocolate' },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'select',
  label: 'Select:',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};
