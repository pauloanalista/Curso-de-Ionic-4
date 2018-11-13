import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGridPage } from './layout-grid.page';

describe('LayoutGridPage', () => {
  let component: LayoutGridPage;
  let fixture: ComponentFixture<LayoutGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
