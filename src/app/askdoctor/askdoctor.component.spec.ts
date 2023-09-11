import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskdoctorComponent } from './askdoctor.component';

describe('AskdoctorComponent', () => {
  let component: AskdoctorComponent;
  let fixture: ComponentFixture<AskdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskdoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
