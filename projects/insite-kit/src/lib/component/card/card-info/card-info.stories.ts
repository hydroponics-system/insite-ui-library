import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardComponent } from '../card.component';
import { CardInfoComponent } from './card-info.component';

export default {
  title: 'Insite/Components/Card/Card Info',
  component: CardInfoComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
    }),
  ],
} as Meta;

const Template: Story<CardInfoComponent> = (args: CardInfoComponent) => ({
  props: args,
  template: `
  <div class="app-container" style="width: 50%;">
    <ik-card>
      <ik-card-info [header]="header" [text]="text" [contentColor]="contentColor" [padding]="padding"></ik-card-info>
    </ik-card>
  </div>`,
});

export const CardInfo = Template.bind({});
CardInfo.args = {
  header: 'First Name',
  text: 'Billy',
};
