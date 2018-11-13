import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSelectPage } from './component-select.page';

describe('ComponentSelectPage', () => {
  let component: ComponentSelectPage;
  let fixture: ComponentFixture<ComponentSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
