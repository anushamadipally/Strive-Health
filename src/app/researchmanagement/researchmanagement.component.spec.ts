import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchmanagementComponent } from './researchmanagement.component';

describe('ResearchmanagementComponent', () => {
  let component: ResearchmanagementComponent;
  let fixture: ComponentFixture<ResearchmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResearchmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
