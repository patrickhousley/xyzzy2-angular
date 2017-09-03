import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xyzzy2-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavItemComponent {
  @Input() routerLink: string;
  @Output() activate = new EventEmitter();
}
