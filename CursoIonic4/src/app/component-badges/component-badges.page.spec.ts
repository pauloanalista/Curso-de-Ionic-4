import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBadgesPage } from './component-badges.page';

describe('ComponentBadgesPage', () => {
  let component: ComponentBadgesPage;
  let fixture: ComponentFixture<ComponentBadgesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentBadgesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentBadgesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
