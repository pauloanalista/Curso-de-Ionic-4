import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentToastPage } from './component-toast.page';

describe('ComponentToastPage', () => {
  let component: ComponentToastPage;
  let fixture: ComponentFixture<ComponentToastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentToastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
