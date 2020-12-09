import React from 'react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: 'youtube'
};
