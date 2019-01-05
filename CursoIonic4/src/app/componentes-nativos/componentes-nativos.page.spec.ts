import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesNativosPage } from './componentes-nativos.page';

describe('ComponentesNativosPage', () => {
  let component: ComponentesNativosPage;
  let fixture: ComponentFixture<ComponentesNativosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesNativosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesNativosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
