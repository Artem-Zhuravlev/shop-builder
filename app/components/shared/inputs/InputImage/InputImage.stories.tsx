import { ImageMetaProps } from '@lib/types/ImageMetaProps';
import { Meta, StoryFn } from '@storybook/react';
import { Form } from 'react-final-form';
import { InputImage, InputImageProps } from './InputImage';

interface InputStoryProps extends InputImageProps {
  field?: ImageMetaProps;
}

export default {
  title: 'Shared/Inputs/InputImage',
  component: InputImage,
} as Meta<typeof InputImage>;

const Template: StoryFn<InputStoryProps> = ({ ...args }) => {
  const onSubmit = async (values: object) => {
    console.log('Form submitted with values:', values);
  };

  return (
    <Form onSubmit={onSubmit} initialValues={{ field: args.field }}>
      {({ handleSubmit, values }) => (
        <>
          {JSON.stringify(values, null, 2)}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
            }}>
            <InputImage {...args} />
          </form>
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'field',
  field: {
    id: 1,
    url: 'https://picsum.photos/200/300',
    alt: 'image',
  },
};
