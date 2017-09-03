import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkMockDirective } from './../../../../test/mocks/angular/router/router-link.mock';
import { NavItemComponent } from './navitem.component';

describe('NavItemComponent', () => {
  let fixture: ComponentFixture<NavItemComponent>;
  let comp: NavItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavItemComponent,
        RouterLinkMockDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemComponent);
    comp = fixture.componentInstance;
  });

  it('should create the routerLink', () => {
    comp.routerLink = 'lobby';
    fixture.detectChanges();

    const linkDE = fixture.debugElement.queryAll(By.directive(RouterLinkMockDirective));
    const links = linkDE.map(de => de.injector.get(RouterLinkMockDirective) as RouterLinkMockDirective);
    expect(links.length).toBe(1);
    expect(links[0].routerLink).toBe('lobby');
  });

  it('should emit activate when clicked', () => {
    const activateSpy = jest.spyOn(comp.activate, 'emit');
    fixture.detectChanges();

    const linkDE = fixture.debugElement.queryAll(By.directive(RouterLinkMockDirective));
    linkDE[0].triggerEventHandler('click', null);

    expect(activateSpy).toHaveBeenCalledTimes(1);
  });
});
