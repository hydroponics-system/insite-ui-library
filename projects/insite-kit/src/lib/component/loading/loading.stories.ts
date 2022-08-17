import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IndicatorLightComponent } from '../indicator-light/indicator-light.component';
import { LoadingComponent } from './loading.component';

export default {
  title: 'Insite/Components/Loading/Loading',
  component: LoadingComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [IndicatorLightComponent],
    }),
  ],
} as Meta;

const loadersSize = ['110px', '80px', '50px', '20px'];
const loadersThickness = ['20px', '8px', '5px', '2px'];

const props = {
  loadersSize: loadersSize,
  loadersThickness: loadersThickness,
};

const Template: Story<LoadingComponent> = (args: LoadingComponent) => ({
  props,
  template: `
  <div style="margin-top: 20px;">
    <div class="row">
      <div *ngFor="let loader of loadersSize" class="col-sm-3 align-self-end" align="center">
        <ik-loading [size]="loader"></ik-loading>
        <span style="color:white; display:block; font-size: 20px; margin-top:20px;">Size: {{loader}}</span>
      </div>
    </div>
    <div class="row" style="margin-top: 20px;">
      <div *ngFor="let loader of loadersThickness" class="col-sm-3 align-self-end" align="center">
        <ik-loading [thickness]="loader"></ik-loading>
        <span style="color:white; display:block; font-size: 20px; margin-top:20px;">Thickness: {{loader}}</span>
      </div>
    </div>
    <div class="row" style="margin-top: 20px;">
      <div class="col-sm-12 align-self-end" align="center">
        <ik-loading type="ellipsis"></ik-loading>
        <span style="color:white; display:block; font-size: 20px; margin-top:20px;">Ellipsis Loader</span>
      </div>
    </div>
  </div>
  `,
});

export const Loading = Template.bind({});
