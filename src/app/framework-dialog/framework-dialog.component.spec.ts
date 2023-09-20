import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkDialogComponent } from './framework-dialog.component';

describe('FrameworkDialogComponent', () => {
  let component: FrameworkDialogComponent;
  let fixture: ComponentFixture<FrameworkDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameworkDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
