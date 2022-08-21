import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { PopupService } from '../../service/notification/popup.service';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'ik-insite-general-notification',
  template: ``,
})
export class InisteGeneralNotificationComponent implements OnInit {
  private readonly GENERAL_SOCKET_URL = '/topic/general/notification';
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
      .listen(this.GENERAL_SOCKET_URL)
      .pipe(
        tap((res) => this.popupService.showNotification(res)),
        takeUntil(this.destroy)
      )
      .subscribe();
  }
}
