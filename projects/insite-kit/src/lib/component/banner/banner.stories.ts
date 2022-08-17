import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IndicatorLightComponent } from '../indicator-light/indicator-light.component';
import { BannerComponent } from './banner.component';

export default {
  title: 'Insite/Components/Banner/Banner',
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [IndicatorLightComponent],
    }),
  ],
} as Meta;

const Template: Story<BannerComponent> = (args: BannerComponent) => ({
  props: args,
  template: `
  <div class="storybook-container">
    <ik-banner type="warning">This is a warning message banner!</ik-banner>
    <ik-banner type="danger">This is a danger message banner!</ik-banner>
    <ik-banner type="info">This is a info message banner!</ik-banner>
  </div>
  `,
});

export const Banner = Template.bind({});
