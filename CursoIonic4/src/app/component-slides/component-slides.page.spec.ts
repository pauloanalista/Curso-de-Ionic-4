import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSlidesPage } from './component-slides.page';

describe('ComponentSlidesPage', () => {
  let component: ComponentSlidesPage;
  let fixture: ComponentFixture<ComponentSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSlidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
