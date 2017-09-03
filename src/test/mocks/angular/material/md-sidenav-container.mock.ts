/* tslint:disable:component-selector */
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'md-sidenav-container',
  template: '<ng-content></ng-content>'
})
export class MdSidenavContainerMockComponent {
  @Output() backdropClick = new EventEmitter();
}
