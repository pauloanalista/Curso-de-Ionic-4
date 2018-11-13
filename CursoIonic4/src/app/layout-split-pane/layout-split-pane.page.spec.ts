import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSplitPanePage } from './layout-split-pane.page';

describe('LayoutSplitPanePage', () => {
  let component: LayoutSplitPanePage;
  let fixture: ComponentFixture<LayoutSplitPanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSplitPanePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSplitPanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
