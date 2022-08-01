import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ik-icon',
  templateUrl: 'icon.component.html',
})
export class IconComponent implements OnInit {
  @Input() icon: string;

  iconClass: string;

  ngOnInit() {
    this.iconClass = `${this.icon}-icon`;
  }
}
