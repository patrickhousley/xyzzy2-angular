import { Injectable } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { Http } from '@angular/http';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as layoutActions from '../actions/layout';

@Injectable()
export class LayoutEffects {
  @Effect() updateSidenavMode$: Observable<Action> = this.actions$.ofType(layoutActions.CHANGE_MEDIA_BREAKPOINT)
    .map(toPayload)
    .map((payload: MediaChange) =>
      payload.mqAlias === 'xs' || payload.mqAlias === 'sm'
        ? new layoutActions.ChangeSidenavMode('over')
        : new layoutActions.ChangeSidenavMode('side')
    );

  @Effect() updateShowSidenav$: Observable<Action> = this.actions$.ofType(
    layoutActions.ENABLE_SIDENAV_CLOSE,
    layoutActions.DISABLE_SIDENAV_CLOSE
  )
    .map(action =>
      action.type === layoutActions.ENABLE_SIDENAV_CLOSE
        ? new layoutActions.CloseSidenav()
        : new layoutActions.OpenSidenav()
    );

  @Effect() updateDisableSidenavClose$: Observable<Action> = this.actions$.ofType(layoutActions.CHANGE_SIDENAV_MODE)
    .map(toPayload)
    .map((payload: string) =>
      payload === 'over'
        ? new layoutActions.EnableSidenavClose()
        : new layoutActions.DisableSidenavClose()
    );

  constructor(private actions$: Actions) {}
}
