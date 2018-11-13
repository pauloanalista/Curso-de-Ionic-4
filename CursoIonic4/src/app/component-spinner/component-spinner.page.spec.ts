import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSpinnerPage } from './component-spinner.page';

describe('ComponentSpinnerPage', () => {
  let component: ComponentSpinnerPage;
  let fixture: ComponentFixture<ComponentSpinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSpinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSpinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
