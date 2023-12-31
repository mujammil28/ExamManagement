import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerDashboardComponent } from './scanner-dashboard.component';

describe('ScannerDashboardComponent', () => {
  let component: ScannerDashboardComponent;
  let fixture: ComponentFixture<ScannerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
