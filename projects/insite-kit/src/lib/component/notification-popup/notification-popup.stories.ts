import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { InsiteKitModule } from '../../insite-kit.module';
import { Notification, NotificationType } from '../../model/notification.model';
import { PopupService } from '../../service/notification/popup.service';
@Component({
  selector: 'ik-storybook-example-notification',
  template: `<button
    class="btn btn-round btn-primary"
    (click)="showNotification()"
  >
    Show Notification
  </button>`,
})
class ExampleNotificationPopupComponent {
  private count = 0;

  constructor(protected readonly popupService: PopupService) {}

  showNotification() {
    const notification: Notification = {
      id: ++this.count,
      body: { bodyType: NotificationType.USER },
    };
    this.popupService.showNotification(notification);
  }
}

export default {
  title: 'Insite/Components/Notification/Popup',
  component: ExampleNotificationPopupComponent,
  decorators: [
    moduleMetadata({
      imports: [InsiteKitModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<ExampleNotificationPopupComponent> = () => ({});

export const Popup = Template.bind({});
