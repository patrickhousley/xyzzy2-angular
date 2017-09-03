import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xyzzy2-sidenav',
  template: '<ng-content></ng-content>'
})
export class SidenavMockComponent {
  @Input() open: boolean;
  @Input() canClose: boolean;
  @Input() mode: string;
  @Output() close = new EventEmitter();
}
