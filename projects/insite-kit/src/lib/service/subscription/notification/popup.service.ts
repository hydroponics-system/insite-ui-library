import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationMessageComponent } from '../../../component/notification-message/notification-message.component';
import { Notification } from '../../../model/notification.model';

/**
 * Service for showing notifications in the application. It will add the component to
 * the specified container that is passed in. By default this will be the navbar.
 *
 * @author Sam Butler
 * @since August 11, 2022
 */
@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private container: ComponentRef<NotificationMessageComponent>;

  /**
   * Sets the overlay container the notification component instance will
   * be attached too.
   *
   * @param viewContainerRef Where the notification should be displayed at.
   */
  overlayContainer(viewContainerRef: ViewContainerRef) {
    this.container = viewContainerRef.createComponent(
      NotificationMessageComponent
    );
  }

  /**
   * Shows the given notification in the container.
   *
   * @param notification The notification to display.
   */
  show(notification: Notification) {
    this.container.instance.addNotification(notification);
  }
}
