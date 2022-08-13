import { Meta, Story } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'Insite/Components/Icon/Icon',
  component: IconComponent,
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
  template: `
  <ik-icon class="float-left" style="margin-right: 10px;" icon="plus"></ik-icon>
  <ik-icon class="float-left" style="margin-right: 10px;" icon="edit"></ik-icon>
  <ik-icon class="float-left" style="margin-right: 10px;" icon="warning"></ik-icon>
  <ik-icon class="float-left" style="margin-right: 10px;" icon="close"></ik-icon>
  <ik-icon class="float-left" style="margin-right: 10px;" icon="notification"></ik-icon>
  `,
});

export const Icon = Template.bind({});
