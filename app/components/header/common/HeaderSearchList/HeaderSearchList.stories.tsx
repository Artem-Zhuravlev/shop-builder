import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { HeaderSearchList } from './HeaderSearchList';

export default {
  title: 'Lists/HeaderSearchList',
  component: HeaderSearchList,
} as Meta<typeof HeaderSearchList>;

const Template: StoryFn<typeof HeaderSearchList> = (args) => <HeaderSearchList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'Adidas',
      slug: 'adidas'
    },
    {
      name: 'Puma',
      slug: 'puma',
      thumbnail: {
        url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR31zGy9WSlAcdq7u9U1Qhm-JkIIaJZrUJ0ClTG3oT6uMT6-SCQzHetXwqXsIlUaAwHxFSOrajjfDrnR4peIyDuWwTifjG1szqjknxje99lXgbdW2gxhtsCSw&usqp=CAE',
        alt: 'puma'
      }
    },
    {
      name: 'Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год',
      slug: '123'
    },
  ]
};

export const WithEmptyResult = Template.bind({});
WithEmptyResult.args = {
  noResults: true
}