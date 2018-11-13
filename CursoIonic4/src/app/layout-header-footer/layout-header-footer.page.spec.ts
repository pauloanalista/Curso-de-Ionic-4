import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderFooterPage } from './layout-header-footer.page';

describe('LayoutHeaderFooterPage', () => {
  let component: LayoutHeaderFooterPage;
  let fixture: ComponentFixture<LayoutHeaderFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHeaderFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHeaderFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
