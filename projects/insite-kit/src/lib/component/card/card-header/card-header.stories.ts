import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CardInfoComponent } from '../card-info/card-info.component';
import { CardComponent } from '../card.component';
import { CardHeaderComponent } from './card-header.component';

export default {
  title: 'Insite/Components/Card/Card Header',
  component: CardHeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent, CardInfoComponent],
    }),
  ],
} as Meta;

const Template: Story<CardHeaderComponent> = (args: CardHeaderComponent) => ({
  props: args,
  template: `
  <div class="storybook-container">
    <div class="leftColumn column-narrow">
      <ik-card [padding]="false">
        <ik-card-header [title]="title"></ik-card-header>
        <div class="flex">
          <div class="left-column">
            <ik-card-info header="First Name" text="Billy"></ik-card-info>
            <ik-card-info header="Role" text="ADMIN"></ik-card-info>
          </div>
          <div class="right-column">
            <ik-card-info header="Last Name" text="James"></ik-card-info>
            <ik-card-info header="App Access" text="GRANTED" contentColor="APPROVED"></ik-card-info>
          </div>
        </div>
      </ik-card>
    </div>
  </div>`,
});

export const CardHeader = Template.bind({});
CardHeader.args = {
  title: 'User Details',
};
