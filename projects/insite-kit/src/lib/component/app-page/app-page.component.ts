import {
  Component,
  Inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NotificationMessageService } from '../../service/subscription/notification/notification-message.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'ik-insite-page',
  templateUrl: 'app-page.component.html',
})
export class AppPageComponent {
  @ViewChild('sidebarNav') sideBar: SidebarComponent;
  @Input() appName: string;

  constructor(
    @Inject(NotificationMessageService) notificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    notificationMessageService.setRootViewContainerRef(viewContainerRef);
  }
}
