import type { Meta, StoryFn } from '@storybook/react';
import { CategoriesSlider } from './CategoriesSlider';

export default {
  title: 'Features/Sliders/CategoriesSlider',
  component: CategoriesSlider,
} as Meta<typeof CategoriesSlider>;

const Template: StoryFn<typeof CategoriesSlider> = (args) => {
  return <CategoriesSlider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      to: '/clocks',
      title: 'Clocks',
      image:
        'https://www.american-time.com/wp-content/uploads/2021/02/04-12in-Black-Plastic-Round-Surface-Mount.jpg',
    },
    {
      to: '/phone',
      title: 'Phone',
      image:
        'https://johnlewis.scene7.com/is/image/JohnLewis/mobiles-nav-card-apple2-200323',
    },
    {
      to: '/powerbank',
      title: 'Powerbank',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSion-N4OKI8en_kO6Bu3aeT_qGqio9N8zu8Q&usqp=CAU',
    },
    {
      to: '/laptop',
      title: 'Laptop',
      image:
        'https://cdn.vox-cdn.com/thumbor/XFmJfJeP7gfDmhrj94NjGRXpezE=/0x0:2040x1360/768x768/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24714291/236695_MacBook_Air_AKrales_0009.jpg',
    },
    {
      to: '/pager',
      title: 'Pager',
      image: 'https://i.ebayimg.com/images/g/iGYAAOSw~iJkIHjC/s-l1200.webp',
    },
  ],
};
