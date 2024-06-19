import { ButtonBase } from '@shared/ButtonBase';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-final-form';
import { InputDatePicker, InputDatePickerProps } from './InputDatePicker';

export default {
  title: 'Shared/Inputs/InputDatePicker',
  component: InputDatePicker,
} as Meta<typeof InputDatePicker>;

interface InputStoryProps extends InputDatePickerProps {
  field?: string | Date;
}

const Template: StoryFn<InputStoryProps> = (args) => {
  const onSubmit = async (values: object) => {
    action('onSubmit')(values);
  };

  return (
    <div style={{ width: '300px' }}>
      <Form onSubmit={onSubmit} initialValues={{ field: '' }}>
        {({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}>
            <InputDatePicker {...args} />
            <ButtonBase type='submit'>Submit</ButtonBase>
          </form>
        )}
      </Form>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'field',
  placeholder: 'Datepicker',
  required: true,
};
