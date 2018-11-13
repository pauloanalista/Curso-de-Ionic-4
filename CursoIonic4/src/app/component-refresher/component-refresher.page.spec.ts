import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRefresherPage } from './component-refresher.page';

describe('ComponentRefresherPage', () => {
  let component: ComponentRefresherPage;
  let fixture: ComponentFixture<ComponentRefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRefresherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
