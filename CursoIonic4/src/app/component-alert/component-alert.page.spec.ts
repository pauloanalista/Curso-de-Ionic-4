import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAlertPage } from './component-alert.page';

describe('ComponentAlertPage', () => {
  let component: ComponentAlertPage;
  let fixture: ComponentFixture<ComponentAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAlertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
