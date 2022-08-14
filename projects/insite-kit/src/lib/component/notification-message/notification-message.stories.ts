import { Component, Inject, ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { InsiteKitModule } from '../../insite-kit.module';
import { Notification, NotificationType } from '../../model/notification.model';
import { PopupService } from '../../service/subscription/notification/popup.service';
@Component({
  selector: 'storybook-example-notification',
  template: `<button
    class="btn btn-round btn-primary"
    (click)="showNotification()"
  >
    Show Notification
  </button>`,
})
class ExampleNotificationPopupComponent {
  count = 0;

  constructor(
    protected readonly popupService: PopupService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    popupService.overlayContainer(viewContainerRef);
  }

  showNotification() {
    const notification: Notification = {
      id: ++this.count,
      body: { bodyType: NotificationType.USER },
    };
    this.popupService.show(notification);
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
