import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xyzzy2-navitem',
  template: '<ng-content></ng-content>'
})
export class NavItemMockComponent {
  @Input() routerLink: boolean;
  @Output() activate = new EventEmitter();
}
