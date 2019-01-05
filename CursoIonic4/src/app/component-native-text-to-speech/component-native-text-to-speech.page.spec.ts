import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNativeTextToSpeechPage } from './component-native-text-to-speech.page';

describe('ComponentNativeTextToSpeechPage', () => {
  let component: ComponentNativeTextToSpeechPage;
  let fixture: ComponentFixture<ComponentNativeTextToSpeechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentNativeTextToSpeechPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNativeTextToSpeechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
