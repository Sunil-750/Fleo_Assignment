import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullyLaunchComponent } from './successfully-launch.component';

describe('SuccessfullyLaunchComponent', () => {
  let component: SuccessfullyLaunchComponent;
  let fixture: ComponentFixture<SuccessfullyLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullyLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullyLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
