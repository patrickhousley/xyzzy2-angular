import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from './layout';
import * as fromRoot from '../../reducers';

export interface State extends fromRoot.State {
  layout: fromLayout.State;
}

export const reducers = {
  layout: fromLayout.reducer
};

export const selectCoreState = createFeatureSelector<State>('core');
export const selectLayoutState = createSelector(
  selectCoreState,
  (state: State) => state.layout
);

export const getMediaBreakpoint = createSelector(
  selectLayoutState,
  fromLayout.getMediaBreakpoint
);

export const getSidenavMode = createSelector(
  selectLayoutState,
  fromLayout.getSidenavMode
);

export const getShowSidenav = createSelector(
  selectLayoutState,
  fromLayout.getShowSidenav
);

export const getDisableSidenavClose = createSelector(
  selectLayoutState,
  fromLayout.getDisableSidenavClose
);
