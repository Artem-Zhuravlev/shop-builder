import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputRadio, InputRadioProps } from './InputRadio';

interface InputRadioStoryProps extends InputRadioProps {
  radio?: string;
}

export default {
  title: 'Shared/Inputs/InputRadio',
  component: InputRadio,
} as Meta<typeof InputRadio>;

const Template: StoryFn<InputRadioStoryProps> = (args) => {
  const onSubmit = async (values: object) => {
    console.log('Form submitted with values:', values);
  };

  const items = ['Label 1', 'Label 2', 'Label 3'];

  const handleChange = (e: any) => {
    action('change')(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit} initialValues={{ radio: args?.radio }}>
      {() => (
        <>
          <div className='d-flex gap-1'>
            {items.map((item, index) => (
              <InputRadio
                value={item}
                name={args.name}
                key={index}
                suffix={args.suffix}
                label={args.label}
                onChange={handleChange}
                disabled={args.disabled}
              />
            ))}
          </div>
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'radio',
};

export const WithSelectedValueSuffix = Template.bind({});
WithSelectedValueSuffix.args = {
  name: 'radio',
  radio: 'Label 2',
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  name: 'radio',
  suffix: 10,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  name: 'radio',
  suffix: 10,
  label: <b>Label</b>,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  name: 'radio',
  disabled: true,
};
