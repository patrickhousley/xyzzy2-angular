/* tslint:disable:component-selector */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-sidenav',
  template: '<ng-content></ng-content>'
})
export class MdSidenavMockComponent {
  @Input() opened: boolean;
  @Input() disableClose: boolean;
  @Input() mode: string;
}
