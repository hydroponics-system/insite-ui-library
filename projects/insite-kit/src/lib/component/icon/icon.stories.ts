import { faAmazon, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faBell,
  faCircleExclamation,
  faCircleInfo,
  faCoffee,
  faEdit,
  faExclamation,
  faMinus,
  faPlus,
  faTrash,
  faTriangleExclamation,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookModule } from '../../test/storybook.module';
import { IconComponent } from './icon.component';

export default {
  title: 'Insite/Components/Icon/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookModule],
    }),
  ],
} as Meta;

let icons = [
  faBell,
  faUser,
  faCircleExclamation,
  faCircleInfo,
  faCoffee,
  faEdit,
  faTrash,
  faPlus,
  faMinus,
  faAmazon,
  faGithub,
  faExclamation,
  faTriangleExclamation,
];

const props = {
  icons: icons,
};

const Template: Story<IconComponent> = () => ({
  props,
  template: `
  <div class="storybook-container">
    <div class="row" style="margin-bottom: 40px;">
      <span style="margin-bottom: 10px; font-size: 20px; color: white;">Variety of different icons. Just the icon definition needs passed to display.</span>
      <div *ngFor="let icon of icons" class="col-sm">
        <ik-icon [icon]="icon"></ik-icon>
      </div>
    </div>
    <div class="row" style="margin-bottom: 40px;">
      <span style="margin-bottom: 10px; font-size: 20px; color: white;">Same Icons but modifying the color.</span>
      <div *ngFor="let icon of icons" class="col-sm">
        <ik-icon [icon]="icon" color="red"></ik-icon>
      </div>
    </div>
    <div class="row">
      <span style="margin-bottom: 10px; font-size: 20px; color: white;">Same Icons but modifying the size.</span>
      <div *ngFor="let icon of icons" class="col-sm">
        <ik-icon [icon]="icon" size="40px"></ik-icon>
      </div>
    </div>
  </div>
  `,
});

export const Icon = Template.bind({});
