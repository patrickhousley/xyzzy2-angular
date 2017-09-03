import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { By } from '@angular/platform-browser';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { SidenavMockComponent } from '../../../../test/mocks/app/core/sidenav.mock';
import * as layoutActions from '../../actions/layout';
import * as fromCore from '../../reducers';
import { ObservableMediaMockService } from './../../../../test/mocks/angular/material/observable-media.mock';
import { NavItemMockComponent } from './../../../../test/mocks/app/core/navitem.mock';
import { ToolbarMockComponent } from './../../../../test/mocks/app/core/toolbar.mock';
import { AppComponent } from './app.container';

describe('NavItemComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
  let store: Store<fromCore.State>;
  let observableMedia: ObservableMediaMockService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({core: combineReducers(fromCore.reducers)})
      ],
      declarations: [
        AppComponent,
        ToolbarMockComponent,
        SidenavMockComponent,
        NavItemMockComponent
      ],
      providers: [
        {
          provide: ObservableMedia,
          useClass: ObservableMediaMockService
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    store = TestBed.get(Store);
    observableMedia = TestBed.get(ObservableMedia);
  });

  it('should create the toolbar', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    const toolbarDE = fixture.debugElement.queryAll(By.directive(ToolbarMockComponent));
    expect(toolbarDE.length).toBe(1);
  });

  it('should create the sidenav', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(SidenavMockComponent));
    expect(sidenavDE.length).toBe(1);
  });

  it('should set the sidenav mode', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    store.dispatch(new layoutActions.ChangeSidenavMode('test'));
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(SidenavMockComponent));
    const sidenav = sidenavDE[0].injector.get(SidenavMockComponent) as SidenavMockComponent;
    expect(sidenav.mode).toBe('test');
  });

  it('should set the sidenav open to true', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    store.dispatch(new layoutActions.OpenSidenav());
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(SidenavMockComponent));
    const sidenav = sidenavDE[0].injector.get(SidenavMockComponent) as SidenavMockComponent;
    expect(sidenav.open).toBe(true);
  });

  it('should set the sidenav open to false', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    store.dispatch(new layoutActions.CloseSidenav());
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(SidenavMockComponent));
    const sidenav = sidenavDE[0].injector.get(SidenavMockComponent) as SidenavMockComponent;
    expect(sidenav.open).toBe(false);
  });

  it('should set the sidenav canClose to false', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    store.dispatch(new layoutActions.DisableSidenavClose());
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(SidenavMockComponent));
    const sidenav = sidenavDE[0].injector.get(SidenavMockComponent) as SidenavMockComponent;
    expect(sidenav.canClose).toBe(false);
  });

  it('should set the sidenav canClose to true', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    store.dispatch(new layoutActions.EnableSidenavClose());
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(SidenavMockComponent));
    const sidenav = sidenavDE[0].injector.get(SidenavMockComponent) as SidenavMockComponent;
    expect(sidenav.canClose).toBe(true);
  });

  it('should set the toolbar menuCollapsed to true', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    store.dispatch(new layoutActions.DisableSidenavClose());
    fixture.detectChanges();

    const toolbarDE = fixture.debugElement.queryAll(By.directive(ToolbarMockComponent));
    const toolbar = toolbarDE[0].injector.get(ToolbarMockComponent) as ToolbarMockComponent;
    expect(toolbar.menuCollapsed).toBe(false);
  });

  it('should set the sidenav canClose to true', () => {
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    store.dispatch(new layoutActions.EnableSidenavClose());
    fixture.detectChanges();

    const toolbarDE = fixture.debugElement.queryAll(By.directive(ToolbarMockComponent));
    const toolbar = toolbarDE[0].injector.get(ToolbarMockComponent) as ToolbarMockComponent;
    expect(toolbar.menuCollapsed).toBe(true);
  });

  it('should call openSidenav when toolbar openMenu is emitted', () => {
    const openSidenavSpy = jest.spyOn(comp, 'openSidenav');
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    const toolbarDE = fixture.debugElement.queryAll(By.directive(ToolbarMockComponent));
    const toolbar = toolbarDE[0].injector.get(ToolbarMockComponent) as ToolbarMockComponent;
    toolbar.openMenu.emit();

    expect(openSidenavSpy).toHaveBeenCalledTimes(1);
  });

  it('should call closeSidenav when sidenav close is emitted', () => {
    const closeSidenavSpy = jest.spyOn(comp, 'closeSidenav');
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(SidenavMockComponent));
    const sidenav = sidenavDE[0].injector.get(SidenavMockComponent) as SidenavMockComponent;
    sidenav.close.emit();

    expect(closeSidenavSpy).toHaveBeenCalledTimes(1);
  });

  it('should call closeSidenav when sidenav item activate is emitted', () => {
    const closeSidenavSpy = jest.spyOn(comp, 'closeSidenav');
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    const navitemDE = fixture.debugElement.queryAll(By.directive(NavItemMockComponent));
    const navitem = navitemDE[0].injector.get(NavItemMockComponent) as NavItemMockComponent;
    navitem.activate.emit();

    expect(closeSidenavSpy).toHaveBeenCalledTimes(1);
  });

  it('should contain the lobby nav item', () => {
    const closeSidenavSpy = jest.spyOn(comp, 'closeSidenav');
    observableMedia.currentMediaChange = new MediaChange(true, '', 'xs');
    fixture.detectChanges();

    const navitemDE = fixture.debugElement.queryAll(By.directive(NavItemMockComponent));
    const navitem = navitemDE[0].injector.get(NavItemMockComponent) as NavItemMockComponent;
    expect(navitem.routerLink).toBe('game');
  });
});
