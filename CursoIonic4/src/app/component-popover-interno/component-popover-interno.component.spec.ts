import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPopoverInternoComponent } from './component-popover-interno.component';

describe('ComponentPopoverInternoComponent', () => {
  let component: ComponentPopoverInternoComponent;
  let fixture: ComponentFixture<ComponentPopoverInternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPopoverInternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPopoverInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
