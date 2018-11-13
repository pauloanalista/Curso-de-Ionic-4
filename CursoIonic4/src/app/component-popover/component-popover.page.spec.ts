import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPopoverPage } from './component-popover.page';

describe('ComponentPopoverPage', () => {
  let component: ComponentPopoverPage;
  let fixture: ComponentFixture<ComponentPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPopoverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
