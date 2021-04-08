import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyLandComponent } from './successfully-land.component';

describe('SuccessfullyLandComponent', () => {
  let component: SuccessfullyLandComponent;
  let fixture: ComponentFixture<SuccessfullyLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullyLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
