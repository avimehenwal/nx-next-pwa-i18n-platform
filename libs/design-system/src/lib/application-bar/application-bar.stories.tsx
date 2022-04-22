import { Story, Meta } from '@storybook/react';
import { ApplicationBar, AppBarProps } from './application-bar';

export default {
  component: ApplicationBar,
  title: 'ApplicationBar',
} as Meta;

const Template: Story<AppBarProps> = (args) => <ApplicationBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
