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
  templateUrl: 'insite-page.component.html',
})
export class InsitePageComponent {
  @ViewChild('sidebarNav') sideBar: SidebarComponent;
  @Input() appName: string;

  constructor(
    @Inject(NotificationMessageService) notificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    notificationMessageService.setRootViewContainerRef(viewContainerRef);
  }
}
