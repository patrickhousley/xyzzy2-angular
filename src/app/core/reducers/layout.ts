import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as layoutActions from '../actions/layout';

export interface State {
  mediaBreakpoint: string;
  sidenavMode: string;
  showSidenav: boolean;
  disableSidenavClose: boolean;
}

export const initialState: State = {
  mediaBreakpoint: 'xs',
  sidenavMode: 'over',
  showSidenav: false,
  disableSidenavClose: false
};

export function reducer(state = initialState, action: layoutActions.Actions): State {
  switch (action.type) {
    case layoutActions.CHANGE_MEDIA_BREAKPOINT:
      return {
        ...state,
        mediaBreakpoint: action.payload.mqAlias
      };
    case layoutActions.CHANGE_SIDENAV_MODE:
      return {
        ...state,
        sidenavMode: action.payload
      };
    case layoutActions.CLOSE_SIDENAV:
      return {
        ...state,
        showSidenav: state.disableSidenavClose
          ? true
          : false
      };
    case layoutActions.OPEN_SIDENAV:
      return {
        ...state,
        showSidenav: true
      };
    case layoutActions.ENABLE_SIDENAV_CLOSE:
      return {
        ...state,
        disableSidenavClose: false
      };
    case layoutActions.DISABLE_SIDENAV_CLOSE:
      return {
        ...state,
        disableSidenavClose: true
      };
    default:
      return state;
  }
}

export const getMediaBreakpoint = (state: State) => state.mediaBreakpoint;
export const getSidenavMode = (state: State) => state.sidenavMode;
export const getShowSidenav = (state: State) => state.showSidenav;
export const getDisableSidenavClose = (state: State) => state.disableSidenavClose;
