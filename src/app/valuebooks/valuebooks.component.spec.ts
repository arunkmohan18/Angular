import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuebooksComponent } from './valuebooks.component';

describe('ValuebooksComponent', () => {
  let component: ValuebooksComponent;
  let fixture: ComponentFixture<ValuebooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuebooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
