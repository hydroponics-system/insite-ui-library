import { Meta, Story } from '@storybook/angular';
import { IndicatorLightComponent } from './indicator-light.component';

export default {
  title: 'Insite/Components/Indicator Light/Indicator Light',
  component: IndicatorLightComponent,
} as Meta;

const lights = ['success', 'warning', 'danger'];
const props = {
  lights: lights,
};

const Template: Story<IndicatorLightComponent> = () => ({
  props,
  template: `
  <div class="storybook-container">
    <div class="row">
      <div class="col-sm-4" align="center">
        <ik-indicator-light status="success"></ik-indicator-light>
        <span style="color:white; display:block; font-size: 20px;">Success</span>
      </div>
      <div class="col-sm-4" align="center">
        <ik-indicator-light status="warning"></ik-indicator-light>
        <span style="color:white; display:block; font-size: 20px;">Warning</span>
      </div>
      <div class="col-sm-4" align="center">
        <ik-indicator-light status="danger"></ik-indicator-light>
        <span style="color:white; display:block; font-size: 20px;">Danger</span>
      </div>
    </div>
  </div>
  `,
});

export const IndicatorLight = Template.bind({});
