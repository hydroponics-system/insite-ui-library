import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Access, Feature, WebRole } from '../../../model/common.model';
import { JwtService } from '../../../service/auth/jwt.service';
import { NotificationMessageService } from '../../../service/subscription/notification/notification-message.service';
import { NotificationService } from '../../../service/subscription/notification/notification.service';
import { StompWebSocketService } from '../../../service/subscription/subscription.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';
@Component({
  selector: 'ik-base-navbar',
  template: '',
})
export class BaseNavbarComponent implements OnInit, OnDestroy {
  @ViewChild('sideBarNav') sideBar: SidebarComponent;

  notificationCount = 0;
  destroy = new Subject<void>();

  Feature = Feature;
  Access = Access;
  notificationAccess: boolean;

  constructor(
    protected readonly router: Router,
    protected readonly notificationService: NotificationService,
    protected readonly jwt: JwtService,
    protected readonly stompService: StompWebSocketService,
    protected readonly notificationMessageService: NotificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    notificationMessageService.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit() {
    this.stompService.init();
    this.notificationUpdates();
    this.listenToWebSocket();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  getNotifications(params?: Map<string, string[]>) {
    return this.notificationService.getNotifications(params);
  }

  notificationUpdates() {
    this.notificationService
      .notificationChange()
      .pipe(
        switchMap(() => this.getNotifications(this.getParams())),
        takeUntil(this.destroy)
      )
      .subscribe((res) => (this.notificationCount = res.length));
  }

  listenToWebSocket() {
    return this.stompService
      .listen()
      .pipe(
        tap((res) => this.notificationMessageService.triggerNotification(res)),
        tap(() => this.notificationService.triggerNotificationUpdate()),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  getParams() {
    const currentUserRole = WebRole[this.jwt.get('webRole')];

    if (Number(currentUserRole) >= WebRole.ADMIN.valueOf()) {
      return new Map().set('read', false);
    } else {
      return new Map()
        .set('receiverId', this.jwt.get('userId'))
        .set('read', false);
    }
  }
}
