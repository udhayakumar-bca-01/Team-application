import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAttendanceComponent } from './apply-attendance.component';

describe('ApplyAttendanceComponent', () => {
  let component: ApplyAttendanceComponent;
  let fixture: ComponentFixture<ApplyAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyAttendanceComponent ]
    })
    .compileComponents()});

    beforeEach(()=>{
    fixture = TestBed.createComponent(ApplyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
