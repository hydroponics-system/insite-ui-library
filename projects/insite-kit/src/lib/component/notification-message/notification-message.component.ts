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
  notificationTimeout = 3500;
  num = 0;

  constructor(private readonly router: Router) {}

  onNotificationRouteClick(notification: Notification) {
    this.router.navigate([`/notification/details/${notification.id}`]);
  }

  addNotification(n: Notification) {
    this.notifications = [...this.notifications, n];
    setTimeout(() => {
      this.notifications = this.notifications.filter((m) => m.id !== n.id);
    }, this.notificationTimeout);
  }
}
