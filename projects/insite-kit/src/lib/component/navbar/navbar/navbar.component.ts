import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBars,
  faBell,
  faClose,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { JwtService } from '../../../service/auth/jwt.service';
import { NotificationMessageService } from '../../../service/subscription/notification/notification-message.service';
import { NotificationService } from '../../../service/subscription/notification/notification.service';
import { SubscriptionService } from '../../../service/subscription/subscription.service';

import { BaseNavbarComponent } from '../base-navbar/base-navbar.component';
@Component({
  selector: 'ik-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent extends BaseNavbarComponent {
  @Input() appName: string;
  @Input() sideBarOpen: boolean = false;
  @Output() menuClick = new EventEmitter<any>();

  menuIcon = faBars;
  notificationBellIcon = faBell;
  profileIcon = faUser;
  closeIcon = faClose;

  constructor(
    router: Router,
    notificationService: NotificationService,
    jwt: JwtService,
    subscriptionService: SubscriptionService,
    notificationMessageService: NotificationMessageService
  ) {
    super(
      router,
      notificationService,
      jwt,
      subscriptionService,
      notificationMessageService
    );
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  onBellClick() {
    this.router.navigate(['/notification']);
  }

  onProfileClick() {
    this.jwt.logOut();
  }

  onLogOutClick() {
    this.jwt.logOut();
    this.subscriptionService.deactivate();
  }
}
