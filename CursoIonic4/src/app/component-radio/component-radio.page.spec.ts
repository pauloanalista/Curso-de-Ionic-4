import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRadioPage } from './component-radio.page';

describe('ComponentRadioPage', () => {
  let component: ComponentRadioPage;
  let fixture: ComponentFixture<ComponentRadioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRadioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
