import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputPage } from './component-input.page';

describe('ComponentInputPage', () => {
  let component: ComponentInputPage;
  let fixture: ComponentFixture<ComponentInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
