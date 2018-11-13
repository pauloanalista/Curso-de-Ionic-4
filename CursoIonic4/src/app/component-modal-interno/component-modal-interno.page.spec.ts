import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModalInternoPage } from './component-modal-interno.page';

describe('ComponentModalInternoPage', () => {
  let component: ComponentModalInternoPage;
  let fixture: ComponentFixture<ComponentModalInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentModalInternoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModalInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
