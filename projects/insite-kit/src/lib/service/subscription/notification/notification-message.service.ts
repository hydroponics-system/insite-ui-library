import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { NotificationMessageComponent } from '../../../component/notification-message/notification-message.component';
import {
  Notification,
  NotificationType,
} from '../../../model/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationMessageService {
  constructor(private readonly toastService: ToastrService) {}

  public show(notification: Notification) {
    this.pushNotification(
      this.determineMessageTitle(notification),
      this.determineMessageBody(notification)
    );
  }

  public showOverride(title: string, body: string) {
    this.pushNotification(title, body);
  }

  private pushNotification(title: string, body: string) {
    const override: Partial<IndividualConfig> = {
      toastComponent: NotificationMessageComponent,
      disableTimeOut: false,
      timeOut: 5000,
      tapToDismiss: true,
      positionClass: 'toast-top-right',
      toastClass: 'toast-icon',
    };

    this.toastService.show(title, body, override);
  }

  private determineMessageTitle(notification: Notification) {
    if (notification) {
      if (notification.type === NotificationType.USER) {
        return 'New User Request';
      } else if (notification.type === NotificationType.SYSTEM_UPDATE) {
        return 'Change to System Settings';
      } else {
        return 'New Request';
      }
    } else {
      return 'New Request';
    }
  }

  private determineMessageBody(notification: Notification) {
    if (notification) {
      if (notification.type === NotificationType.USER) {
        return 'A new user request needs approval.';
      } else if (notification.type === NotificationType.SYSTEM_UPDATE) {
        return 'There has been changes to a system.';
      } else {
        return 'A new notification is in your inbox';
      }
    } else {
      return 'A new notification is in your inbox';
    }
  }
}
