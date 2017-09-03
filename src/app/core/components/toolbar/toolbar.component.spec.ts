import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdToolbar } from '@angular/material';
import { By } from '@angular/platform-browser';
import { MdIconMockComponent } from '../../../../test/mocks/angular/material/md-icon.mock';
import { MdToolbarMockComponent } from './../../../../test/mocks/angular/material/md-toolbar.mock';
import { ToolbarComponent } from './toolbar.component';

describe('NavItemComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let comp: ToolbarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        MdToolbarMockComponent,
        MdIconMockComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    comp = fixture.componentInstance;
  });

  it('should create the toolbar', () => {
    fixture.detectChanges();

    const toolbarDE = fixture.debugElement.queryAll(By.directive(MdToolbarMockComponent));
    expect(toolbarDE.length).toBe(1);
  });

  it('should show the menu button', () => {
    comp.menuCollapsed = true;
    fixture.detectChanges();

    const buttonDE = fixture.debugElement.queryAll(By.css('.xyzzy2-toolbar--sidenav-button'));
    expect(buttonDE.length).toBe(1);
  });

  it('should not show the menu button', () => {
    comp.menuCollapsed = false;
    fixture.detectChanges();

    const buttonDE = fixture.debugElement.queryAll(By.css('.xyzzy2-toolbar--sidenav-button'));
    expect(buttonDE.length).toBe(0);
  });

  it('should emit openMenu when menu button clicked', () => {
    const openMenuSpy = jest.spyOn(comp.openMenu, 'emit');
    comp.menuCollapsed = true;
    fixture.detectChanges();

    const buttonDE = fixture.debugElement.queryAll(By.css('.xyzzy2-toolbar--sidenav-button'));
    buttonDE[0].triggerEventHandler('click', null);

    expect(openMenuSpy).toHaveBeenCalledTimes(1);
  });

  it('should contain the app title', () => {
    fixture.detectChanges();

    const titleDE = fixture.debugElement.queryAll(By.css('.xyzzy2-toolbar--title'));
    expect(titleDE.length).toBe(1);
    expect(titleDE[0].nativeElement.innerHTML).toBe('Xyzzy 2');
  });
});
