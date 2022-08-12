import { Meta, Story } from '@storybook/angular/types-6-0';
import { HeaderComponent } from 'projects/insite-kit/src/lib/component/header/header.component';

export default {
  title: 'Insite/Components/Header/Header',
  component: HeaderComponent,
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Header Title',
};
