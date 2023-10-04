import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent } from './shahin-special-report-equipment-handling-performance-history-form.component';

describe('ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent', () => {
  let component: ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent;
  let fixture: ComponentFixture<ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinSpecialReportEquipmentHandlingPerformanceHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
