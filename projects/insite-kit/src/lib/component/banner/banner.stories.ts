import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookModule } from '../../test/storybook.module';
import { BannerComponent } from './banner.component';

export default {
  title: 'Insite/Components/Banner/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookModule],
    }),
  ],
} as Meta;

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  props: args,
  template: `
  <div class="storybook-container">
    <ik-banner></ik-banner>
    <ik-banner type="warning">This is a warning message banner!</ik-banner>
    <ik-banner type="danger">This is a danger message banner!</ik-banner>
    <ik-banner type="info">This is a info message banner!</ik-banner>
  </div>
  `,
});

export const Banner = Template.bind({});
