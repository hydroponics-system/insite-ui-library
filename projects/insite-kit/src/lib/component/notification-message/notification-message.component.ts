import { Component } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';
import { NOTIFICATION_ANIMATION } from './animation.component';

@Component({
  selector: '[ik-notification-message]',
  templateUrl: 'notification-message.component.html',
  animations: [NOTIFICATION_ANIMATION],
  preserveWhitespaces: false,
})
export class NotificationMessageComponent extends Toast {
  constructor(toastrService: ToastrService, toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  action(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction();
    return false;
  }
}
