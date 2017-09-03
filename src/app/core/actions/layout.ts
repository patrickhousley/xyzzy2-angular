import { MediaChange } from '@angular/flex-layout';
import { Action } from '@ngrx/store';

export const CHANGE_MEDIA_BREAKPOINT = '[Layout] Change Media Breakpoint';
export const CHANGE_SIDENAV_MODE = '[Layout] Change Sidenav Mode';
export const OPEN_SIDENAV = '[Layout] Open Sidenav';
export const CLOSE_SIDENAV = '[Layout] Close Sidenav';
export const ENABLE_SIDENAV_CLOSE = '[Layout] Enable Sidenav Close';
export const DISABLE_SIDENAV_CLOSE = '[Layout] Disable Sidenav Close';

export class ChangeMediaBreakpoint implements Action {
  readonly type = CHANGE_MEDIA_BREAKPOINT;

  constructor(public payload: MediaChange) {}
}

export class ChangeSidenavMode implements Action {
  readonly type = CHANGE_SIDENAV_MODE;

  constructor(public payload: string) {}
}

export class OpenSidenav implements Action {
  readonly type = OPEN_SIDENAV;
}

export class CloseSidenav implements Action {
  readonly type = CLOSE_SIDENAV;
}

export class EnableSidenavClose implements Action {
  readonly type = ENABLE_SIDENAV_CLOSE;
}

export class DisableSidenavClose implements Action {
  readonly type = DISABLE_SIDENAV_CLOSE;
}

export type Actions =
  ChangeMediaBreakpoint
  | ChangeSidenavMode
  | OpenSidenav
  | CloseSidenav
  | EnableSidenavClose
  | DisableSidenavClose;
