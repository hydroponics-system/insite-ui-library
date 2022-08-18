import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IconComponent } from '../../icon/icon.component';
import { HeaderComponent } from '../header.component';
import { HeaderBackComponent } from './header-back.component';

export default {
  title: 'Insite/Components/Header/Header Back',
  component: HeaderBackComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      declarations: [HeaderComponent, IconComponent],
    }),
  ],
} as Meta;

const Template: Story<HeaderBackComponent> = (args: HeaderBackComponent) => ({
  props: args,
  template: `
    <ik-header title="Header Back">
      <ik-header-back></ik-header-back>
    </ik-header>
  `,
});

export const HeaderBack = Template.bind({});
