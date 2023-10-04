import { TestBed } from '@angular/core/testing';

import { ShahinSpecialReportEquipmentHandlingPerformanceService } from './shahin-special-report-equipment-handling-performance.service';

describe('ShahinSpecialReportEquipmentHandlingPerformanceService', () => {
  let service: ShahinSpecialReportEquipmentHandlingPerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShahinSpecialReportEquipmentHandlingPerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
