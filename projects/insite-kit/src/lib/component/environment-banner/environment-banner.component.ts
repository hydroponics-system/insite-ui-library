import { Component, Input } from '@angular/core';

@Component({
  selector: 'ik-environment-banner',
  templateUrl: 'environment-banner.component.html',
})
export class EnvironmentBannerComponent {
  @Input() type: 'DEVELOPMENT' | 'LOCAL' | 'PRODUCTION' | 'TEST' =
    'DEVELOPMENT';
}
