import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MdNavListMockComponent } from './../../../../test/mocks/angular/material/md-nav-list.mock';
import { MdSidenavContainerMockComponent } from './../../../../test/mocks/angular/material/md-sidenav-container.mock';
import { MdSidenavMockComponent } from './../../../../test/mocks/angular/material/md-sidenav.mock';
import { RouterOutletMockComponent } from './../../../../test/mocks/angular/router/router-outlet.mock';
import { SidenavComponent } from './sidenav.component';

describe('NavItemComponent', () => {
  let fixture: ComponentFixture<SidenavComponent>;
  let comp: SidenavComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SidenavComponent,
        RouterOutletMockComponent,
        MdSidenavContainerMockComponent,
        MdSidenavMockComponent,
        MdNavListMockComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    comp = fixture.componentInstance;
  });

  it('should create the sidenav container', () => {
    fixture.detectChanges();

    const containerDE = fixture.debugElement.queryAll(By.directive(MdSidenavContainerMockComponent));
    expect(containerDE.length).toBe(1);
  });

  it('should create the sidenav', () => {
    fixture.detectChanges();

    const sidenavDE = fixture.debugElement.queryAll(By.directive(MdSidenavMockComponent));
    expect(sidenavDE.length).toBe(1);
  });

  it('should emit close when backdrop clicked', () => {
    const closeSpy = jest.spyOn(comp.close, 'emit');
    fixture.detectChanges();

    const containerDE = fixture.debugElement.queryAll(By.directive(MdSidenavContainerMockComponent));
    const container = containerDE[0].injector.get(MdSidenavContainerMockComponent) as MdSidenavContainerMockComponent;
    container.backdropClick.emit();

    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});
