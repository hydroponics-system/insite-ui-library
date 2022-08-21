import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { PopupService } from '../../service/notification/popup.service';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'ik-insite-user-notification',
  template: ``,
})
export class InisteUserNotificationComponent implements OnInit {
  private readonly USER_SOCKET_URL = '/queue/user/notification';
  destroy = new Subject<void>();

  constructor(
    private readonly subscriptionService: SubscriptionService,
    private readonly popupService: PopupService
  ) {}

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit() {
    this.subscriptionService.init();
    return this.subscriptionService
      .listen(this.USER_SOCKET_URL, true)
      .pipe(
        tap((res) => this.popupService.showNotification(res)),
        takeUntil(this.destroy)
      )
      .subscribe();
  }
}
