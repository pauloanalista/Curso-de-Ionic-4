import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentButtonPage } from './component-button.page';

describe('ComponentButtonPage', () => {
  let component: ComponentButtonPage;
  let fixture: ComponentFixture<ComponentButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
