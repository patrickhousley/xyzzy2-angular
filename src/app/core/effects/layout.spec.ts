import { MediaChange } from '@angular/flex-layout';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { LayoutEffects } from './layout';
import { Observable } from 'rxjs/Observable';
import { marbles } from 'rxjs-marbles';
import * as layoutActions from '../actions/layout';

describe('LayoutEffects', () => {
  let effects: LayoutEffects;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LayoutEffects,
        provideMockActions(() => actions)
      ],
    });

    effects = TestBed.get(LayoutEffects);
  });

  describe('updateSidenavMode$', () => {
    [
      'xs',
      'sm'
    ].forEach(val => {
      it('should set sidenav mode to over', marbles((m) => {
        const values = {
          a: new layoutActions.ChangeMediaBreakpoint(new MediaChange(true, '', val))
        };
        const expectedValues = {
          b: new layoutActions.ChangeSidenavMode('over')
        };

        actions = m.hot('--^-a-|', values);
        const expected = m.cold('--b-|', expectedValues);

        m.expect(effects.updateSidenavMode$).toBeObservable(expected);
      }));
    });

    [
      'md',
      'lg',
      'xl'
    ].forEach(val => {
      it('should set sidenav mode to side', marbles((m) => {
        const values = {
          a: new layoutActions.ChangeMediaBreakpoint(new MediaChange(true, '', val))
        };
        const expectedValues = {
          b: new layoutActions.ChangeSidenavMode('side')
        };

        actions = m.hot('--^-a-|', values);
        const expected = m.cold('--b-|', expectedValues);

        m.expect(effects.updateSidenavMode$).toBeObservable(expected);
      }));
    });
  });

  describe('updateShowSidenav$', () => {
    it('should close the sidenav', marbles((m) => {
      const values = {
        a: new layoutActions.EnableSidenavClose()
      };
      const expectedValues = {
        b: new layoutActions.CloseSidenav()
      };

      actions = m.hot('--^-a-|', values);
      const expected = m.cold('--b-|', expectedValues);

      m.expect(effects.updateShowSidenav$).toBeObservable(expected);
    }));

    it('should open the sidenav', marbles((m) => {
      const values = {
        a: new layoutActions.DisableSidenavClose()
      };
      const expectedValues = {
        b: new layoutActions.OpenSidenav()
      };

      actions = m.hot('--^-a-|', values);
      const expected = m.cold('--b-|', expectedValues);

      m.expect(effects.updateShowSidenav$).toBeObservable(expected);
    }));
  });

  describe('updateDisableSidenavClose$', () => {
    it('should set disable sidenav close to false', marbles((m) => {
      const values = {
        a: new layoutActions.ChangeSidenavMode('over')
      };
      const expectedValues = {
        b: new layoutActions.EnableSidenavClose()
      };

      actions = m.hot('--^-a-|', values);
      const expected = m.cold('--b-|', expectedValues);

      m.expect(effects.updateDisableSidenavClose$).toBeObservable(expected);
    }));

    it('should set disable sidenav close to true', marbles((m) => {
      const values = {
        a: new layoutActions.ChangeSidenavMode('side')
      };
      const expectedValues = {
        b: new layoutActions.DisableSidenavClose()
      };

      actions = m.hot('--^-a-|', values);
      const expected = m.cold('--b-|', expectedValues);

      m.expect(effects.updateDisableSidenavClose$).toBeObservable(expected);
    }));
  });
});
