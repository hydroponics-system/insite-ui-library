import { Meta, Story } from '@storybook/angular';
import { HeaderComponent } from 'projects/insite-kit/src/lib/component/header/header.component';

export default {
  title: 'Insite/Components/Header',
  component: HeaderComponent,
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Header = Template.bind({});
Header.args = {
  title: 'Header Title',
};
