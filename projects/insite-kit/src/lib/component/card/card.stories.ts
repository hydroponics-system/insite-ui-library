import { Meta, Story } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'Insite/Components/Card',
  component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
  template: `
  <div class="app-container" style="width: 50%;">
    <ik-card [padding]="padding" [marginBottom]="marginBottom">
      This will be inside of the card
    </ik-card>
    <ik-card [padding]="padding" [marginBottom]="marginBottom">
      Second Card to show margin
    </ik-card>
  </div>`,
});

export const CardContent = Template.bind({});
