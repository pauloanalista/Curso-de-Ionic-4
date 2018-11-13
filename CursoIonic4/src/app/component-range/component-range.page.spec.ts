import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRangePage } from './component-range.page';

describe('ComponentRangePage', () => {
  let component: ComponentRangePage;
  let fixture: ComponentFixture<ComponentRangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
