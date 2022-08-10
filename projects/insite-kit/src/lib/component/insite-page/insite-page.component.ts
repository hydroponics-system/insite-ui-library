import { Component, Input, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'ik-insite-page',
  templateUrl: 'insite-page.component.html',
})
export class InsitePageComponent {
  @ViewChild('sidebarNav') sideBar: SidebarComponent;
  @Input() appName: string;
}
