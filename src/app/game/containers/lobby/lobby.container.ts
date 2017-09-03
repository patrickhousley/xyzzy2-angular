import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'xyzzy2-app',
  templateUrl: './lobby.container.html',
  styleUrls: ['./lobby.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LobbyComponent {

}
