import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StorybookModule } from '../../test/storybook.module';
import { InsitePageComponent } from './insite-page.component';

export default {
  title: 'Insite/Components/Page/Page',
  component: InsitePageComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookModule],
    }),
  ],
} as Meta;

const Template: Story<InsitePageComponent> = (args: InsitePageComponent) => ({
  props: args,
});

export const Page = Template.bind({});
