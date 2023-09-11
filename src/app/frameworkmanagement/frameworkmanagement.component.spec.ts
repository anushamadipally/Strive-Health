import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkmanagementComponent } from './frameworkmanagement.component';

describe('FrameworkmanagementComponent', () => {
  let component: FrameworkmanagementComponent;
  let fixture: ComponentFixture<FrameworkmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
