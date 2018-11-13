import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoadingPage } from './component-loading.page';

describe('ComponentLoadingPage', () => {
  let component: ComponentLoadingPage;
  let fixture: ComponentFixture<ComponentLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLoadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
