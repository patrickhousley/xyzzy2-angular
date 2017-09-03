import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
  } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as layoutActions from '../../actions/layout';
import * as coreReducers from '../../reducers';

@Component({
  selector: 'xyzzy2-app',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<any>();

  showSidenav$: Observable<boolean>;
  disabledSideNavClose$: Observable<boolean>;
  sidenavMode$: Observable<string>;

  constructor(private store: Store<coreReducers.State>,
              private media: ObservableMedia) {
  }

  ngOnInit() {
    this.sidenavMode$ = this.store.select(coreReducers.getSidenavMode);
    this.showSidenav$ = this.store.select(coreReducers.getShowSidenav);
    this.disabledSideNavClose$ = this.store.select(coreReducers.getDisableSidenavClose);

    this.media.asObservable()
      .distinctUntilChanged((a, b) => a.mqAlias === b.mqAlias)
      .catch(error => {
        console.error(error);
        return Observable.of(new MediaChange(true, '', 'xs'));
      })
      .subscribe(
        mediaChange => this.store.dispatch(new layoutActions.ChangeMediaBreakpoint(mediaChange))
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
  }

  closeSidenav() {
    this.store.dispatch(new layoutActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new layoutActions.OpenSidenav());
  }
}
