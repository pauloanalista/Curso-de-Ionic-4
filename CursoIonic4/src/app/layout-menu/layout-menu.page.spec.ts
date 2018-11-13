import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMenuPage } from './layout-menu.page';

describe('LayoutMenuPage', () => {
  let component: LayoutMenuPage;
  let fixture: ComponentFixture<LayoutMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
