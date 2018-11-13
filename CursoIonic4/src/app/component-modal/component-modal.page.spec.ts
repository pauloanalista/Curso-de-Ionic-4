import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModalPage } from './component-modal.page';

describe('ComponentModalPage', () => {
  let component: ComponentModalPage;
  let fixture: ComponentFixture<ComponentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
