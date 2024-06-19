import { ButtonBase } from '@shared/ButtonBase';
import { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputPassword } from './InputPassword';

export default {
  title: 'Shared/Inputs/InputPassword',
  component: InputPassword,
} as Meta<typeof InputPassword>;

const Template: StoryFn<typeof InputPassword> = (args) => {
  return (
    <Form
      onSubmit={async (values) => {
        console.log('Form submitted with values:', values);
      }}
      initialValues={{ field: 'Some value' }}
      render={({ handleSubmit }) => (
        <>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '20px' }}>
            <InputPassword {...args} />
            <ButtonBase type='submit'>Submit</ButtonBase>
          </form>
        </>
      )}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'Some string',
  placeholder: 'Please add text',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  value: 'Some string',
  disabled: true,
  placeholder: 'Please add text',
};

export const EmptyField = Template.bind({});
EmptyField.args = {
  value: '',
  placeholder: 'Please add text',
};

export const WithoutFormWrapper = Template.bind({});
WithoutFormWrapper.args = {
  value: 'without form wrapper',
  placeholder: 'Please add text',
};

export const WithCustomValidation = Template.bind({});
WithCustomValidation.args = {
  value: 'without form wrapper',
  placeholder: 'Please add text',
  required: true,
  validationHandler(value) {
    if (!value) {
      return 'Password is required';
    }
  },
};
