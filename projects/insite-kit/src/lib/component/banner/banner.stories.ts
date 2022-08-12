import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconComponent } from '../icon/icon.component';
import { BannerComponent } from './banner.component';

export default {
  title: 'Insite/Components/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
    }),
  ],
} as Meta;

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  props: args,
  template: `<ik-banner [type]="type">This is a warning message banner!</ik-banner>`,
});

export const BannerContent = Template.bind({});
BannerContent.args = {
  type: 'warning',
};
