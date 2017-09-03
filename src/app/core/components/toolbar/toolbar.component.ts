import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xyzzy2-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() menuCollapsed = false;
  @Output() openMenu = new EventEmitter();
}
