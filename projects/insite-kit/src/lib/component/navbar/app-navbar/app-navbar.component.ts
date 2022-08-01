import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewContainerRef,
} from '@angular/core';
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
import { StompWebSocketService } from '../../../service/subscription/subscription.service';

import { BaseNavbarComponent } from '../base-navbar/base-navbar.component';
@Component({
  selector: 'ik-navbar',
  templateUrl: 'app-navbar.component.html',
})
export class AppNavbarComponent extends BaseNavbarComponent {
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
    stompService: StompWebSocketService,
    notificationMessageService: NotificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    super(
      router,
      notificationService,
      jwt,
      stompService,
      notificationMessageService,
      viewContainerRef
    );
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  onBellClick() {
    this.router.navigate(['/notification']);
  }

  onProfileClick() {
    // this.router.navigate(['/profile']);
    this.jwt.logOut();
  }

  onLogOutClick() {
    this.jwt.logOut();
    this.stompService.deactivate();
  }
}
