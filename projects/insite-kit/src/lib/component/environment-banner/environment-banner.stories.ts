import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookModule } from '../../test/storybook.module';
import { EnvironmentBannerComponent } from './environment-banner.component';

export default {
  title: 'Insite/Components/Banner',
  component: EnvironmentBannerComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookModule],
    }),
  ],
} as Meta;

const Template: Story<EnvironmentBannerComponent> = (
  args: EnvironmentBannerComponent
) => ({
  props: args,
});

export const EnvironmentBanner = Template.bind({});

EnvironmentBanner.args = {
  type: 'DEVELOPMENT',
};
