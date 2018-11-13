import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCssUtilitiesPage } from './layout-css-utilities.page';

describe('LayoutCssUtilitiesPage', () => {
  let component: LayoutCssUtilitiesPage;
  let fixture: ComponentFixture<LayoutCssUtilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCssUtilitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCssUtilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
