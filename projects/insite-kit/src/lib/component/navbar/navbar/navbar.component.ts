import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBars,
  faBell,
  faClose,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { JwtService } from '../../../service/auth/jwt.service';
import { NotificationService } from '../../../service/subscription/notification/notification.service';
import { PopupService } from '../../../service/subscription/notification/popup.service';
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
    popupService: PopupService
  ) {
    super(router, notificationService, jwt, subscriptionService, popupService);
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  onBellClick() {
    this.router.navigate(['/notification']);
  }

  onProfileClick() {
    this.router.navigate(['/profile']);
  }

  onLogOutClick() {
    this.subscriptionService.disconnect();
    this.jwt.logOut();
  }
}
