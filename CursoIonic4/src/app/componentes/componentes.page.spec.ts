import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPage } from './componentes.page';

describe('ComponentesPage', () => {
  let component: ComponentesPage;
  let fixture: ComponentFixture<ComponentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
