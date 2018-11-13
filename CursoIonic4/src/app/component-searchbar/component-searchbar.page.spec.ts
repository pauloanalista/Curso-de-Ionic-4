import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSearchbarPage } from './component-searchbar.page';

describe('ComponentSearchbarPage', () => {
  let component: ComponentSearchbarPage;
  let fixture: ComponentFixture<ComponentSearchbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSearchbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSearchbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
