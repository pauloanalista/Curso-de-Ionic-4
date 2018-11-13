import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDatetimePage } from './component-datetime.page';

describe('ComponentDatetimePage', () => {
  let component: ComponentDatetimePage;
  let fixture: ComponentFixture<ComponentDatetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDatetimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
