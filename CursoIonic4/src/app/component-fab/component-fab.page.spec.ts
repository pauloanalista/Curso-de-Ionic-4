import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFabPage } from './component-fab.page';

describe('ComponentFabPage', () => {
  let component: ComponentFabPage;
  let fixture: ComponentFixture<ComponentFabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentFabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
