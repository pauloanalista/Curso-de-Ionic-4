import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInfinitScrollPage } from './component-infinit-scroll.page';

describe('ComponentInfinitScrollPage', () => {
  let component: ComponentInfinitScrollPage;
  let fixture: ComponentFixture<ComponentInfinitScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInfinitScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInfinitScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
