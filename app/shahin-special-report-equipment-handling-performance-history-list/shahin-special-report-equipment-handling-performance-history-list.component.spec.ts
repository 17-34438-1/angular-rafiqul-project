import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent } from './shahin-special-report-equipment-handling-performance-history-list.component';

describe('ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent', () => {
  let component: ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent;
  let fixture: ComponentFixture<ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinSpecialReportEquipmentHandlingPerformanceHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
