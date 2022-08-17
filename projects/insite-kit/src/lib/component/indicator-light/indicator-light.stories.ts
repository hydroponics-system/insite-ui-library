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
    <div style="margin-bottom: 100px;" *ngFor="let light of lights">
      <div style="display: flex; flex-direction: column; align-items: center;">
        <ik-indicator-light [status]="light"></ik-indicator-light>
        <span style="color:white; display:block; font-size: 20px;">{{light}}</span>
      </div>
    </div>
  </div>
  `,
});

export const IndicatorLight = Template.bind({});
