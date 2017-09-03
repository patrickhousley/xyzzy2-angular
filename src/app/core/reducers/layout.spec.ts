import { MediaChange } from '@angular/flex-layout';
import * as layoutActions from '../actions/layout';
import { reducer } from './layout';
import * as fromLayout from './layout';

describe('LayoutReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromLayout.initialState);
    });
  });

  describe('CHANGE_MEDIA_BREAKPOINT', () => {
    it('should set media breakpoint to "xl"', () => {
      const mediaChange = new MediaChange(true, '', 'xl');
      const action = new layoutActions.ChangeMediaBreakpoint(mediaChange);
      const initialState = {
        ...fromLayout.initialState,
        mediaBreakpoint: 'xs'
      };

      const expectedResult = {
        ...initialState,
        mediaBreakpoint: 'xl'
      };

      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('CHANGE_SIDENAV_MODE', () => {
    it('should set sidenav mode to "side"', () => {
      const mode = 'side';
      const action = new layoutActions.ChangeSidenavMode(mode);
      const initialState = {
        ...fromLayout.initialState,
        sidenavMode: 'over'
      };

      const expectedResult = {
        ...initialState,
        sidenavMode: 'side'
      };

      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('CLOSE_SIDENAV', () => {
    it('should set sidenav open to false', () => {
      const action = new layoutActions.CloseSidenav();
      const initialState = {
        ...fromLayout.initialState,
        showSidenav: true,
        disableSidenavClose: false
      };

      const expectedResult = {
        ...initialState,
        showSidenav: false
      };

      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });

    it('should not set sidenav open to false when closing is disabled', () => {
      const action = new layoutActions.CloseSidenav();
      const initialState = {
        ...fromLayout.initialState,
        showSidenav: true,
        disableSidenavClose: true
      };

      const expectedResult = {
        ...initialState,
        showSidenav: true
      };

      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('OPEN_SIDENAV', () => {
    it('should set sidenav open to true', () => {
      const action = new layoutActions.OpenSidenav();
      const initialState = {
        ...fromLayout.initialState,
        showSidenav: false
      };

      const expectedResult = {
        ...initialState,
        showSidenav: true
      };

      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('ENABLE_SIDENAV_CLOSE', () => {
    it('should set disabled sidenav to false', () => {
      const action = new layoutActions.EnableSidenavClose();
      const initialState = {
        ...fromLayout.initialState,
        disableSidenavClose: true
      };

      const expectedResult = {
        ...initialState,
        disableSidenavClose: false
      };

      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('DISABLE_SIDENAV_CLOSE', () => {
    it('should set disabled sidenav to true', () => {
      const action = new layoutActions.DisableSidenavClose();
      const initialState = {
        ...fromLayout.initialState,
        disableSidenavClose: false
      };

      const expectedResult = {
        ...initialState,
        disableSidenavClose: true
      };

      const result = reducer(initialState, action);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('getMediaBreakpoint', () => {
    it('should return the current media breakpoint', () => {
      const initialState = {
        ...fromLayout.initialState,
        mediaBreakpoint: 'xs'
      };

      const result = fromLayout.getMediaBreakpoint(initialState);
      expect(result).toBe('xs');
    });
  });

  describe('getSidenavMode', () => {
    it('should return the current media breakpoint', () => {
      const initialState = {
        ...fromLayout.initialState,
        sidenavMode: 'over'
      };

      const result = fromLayout.getSidenavMode(initialState);
      expect(result).toBe('over');
    });
  });

  describe('getShowSidenav', () => {
    it('should return the current media breakpoint', () => {
      const initialState = {
        ...fromLayout.initialState,
        showSidenav: true
      };

      const result = fromLayout.getShowSidenav(initialState);
      expect(result).toBe(true);
    });
  });

  describe('getDisableSidenavClose', () => {
    it('should return the current media breakpoint', () => {
      const initialState = {
        ...fromLayout.initialState,
        disableSidenavClose: true
      };

      const result = fromLayout.getDisableSidenavClose(initialState);
      expect(result).toBe(true);
    });
  });
});
