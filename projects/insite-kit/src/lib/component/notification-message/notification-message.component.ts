import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from '../../model/notification.model';

@Component({
  selector: 'ik-notification-message',
  templateUrl: 'notification-message.component.html',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class NotificationMessageComponent {
  notifications: Notification[] = [];
  timeout: number = 3500;
  num = 0;

  constructor(private readonly router: Router) {}

  /**
   * Routes to the notifications page when it is clicked.
   *
   * @param notification The notification that is being displayed.
   */
  onNotificationRouteClick(notification: Notification) {
    this.router.navigate([`/notification/details/${notification.id}`]);
  }

  /**
   * Adds the notification to the component list to be displayed.
   *
   * @param notification The notification to be added.
   */
  addNotification(notification: Notification) {
    this.notifications = [...this.notifications, notification];
    setTimeout(() => {
      this.notifications = this.notifications.filter(
        (m) => m.id !== notification.id
      );
    }, this.timeout);
  }
}
