import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputText } from './InputText';
import { ButtonBase } from '../ButtonBase';

export default {
  title: 'inputs/InputText',
  component: InputText,
} as Meta<typeof InputText>;

const Template: StoryFn<typeof InputText> = (args) => {
  return (
  <Form
    onSubmit={async (values) => {
      console.log('Form submitted with values:', values);
    }}
    initialValues={{field: 'Some value'}}
    render={({ handleSubmit, values }) => (
      <>
        {
          args?.withForm && JSON.stringify(values)
        }
      
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', gap: '20px' }}
      >
        <InputText
          {...args}
        />
        <ButtonBase type="submit">Submit</ButtonBase>
      </form>
      </>
    )}
  />
)};

export const Primary = Template.bind({});
Primary.args = {
  value: 'Some string',
  withForm: true,
  placeholder: 'Please add text'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  value: 'Some string',
  withForm: true,
  disabled: true,
  placeholder: 'Please add text'
};

export const EmptyField = Template.bind({});
EmptyField.args = {
  value: '',
  withForm: true,
  placeholder: 'Please add text'
};

export const WithoutFormWrapper = Template.bind({});
WithoutFormWrapper.args = {
  value: 'without form wrapper',
  withForm: false,
  placeholder: 'Please add text'
};
