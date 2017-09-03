import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xyzzy2-toolbar',
  template: '<ng-content></ng-content>'
})
export class ToolbarMockComponent {
  @Input() menuCollapsed: boolean;
  @Output() openMenu = new EventEmitter();
}
