import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconComponent } from '../icon/icon.component';
import { BannerComponent } from './banner.component';

export default {
  title: 'Insite/Components/Banner/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
    }),
  ],
} as Meta;

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  props: args,
  template: `
  <div class="storybook-container">
    <ik-banner [type]="type">This is a warning message banner!</ik-banner>
  </div>
  `,
});

export const Banner = Template.bind({});
Banner.args = {
  type: 'warning',
};
