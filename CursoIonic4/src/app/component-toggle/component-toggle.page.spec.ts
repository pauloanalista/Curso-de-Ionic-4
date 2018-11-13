import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTogglePage } from './component-toggle.page';

describe('ComponentTogglePage', () => {
  let component: ComponentTogglePage;
  let fixture: ComponentFixture<ComponentTogglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTogglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTogglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
