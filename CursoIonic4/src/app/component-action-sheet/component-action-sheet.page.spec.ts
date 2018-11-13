import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentActionSheetPage } from './component-action-sheet.page';

describe('ComponentActionSheetPage', () => {
  let component: ComponentActionSheetPage;
  let fixture: ComponentFixture<ComponentActionSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentActionSheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
