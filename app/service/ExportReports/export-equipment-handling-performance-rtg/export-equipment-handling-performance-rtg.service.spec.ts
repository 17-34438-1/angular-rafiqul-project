import { TestBed } from '@angular/core/testing';

import { ExportEquipmentHandlingPerformanceRtgService } from './export-equipment-handling-performance-rtg.service';

describe('ExportEquipmentHandlingPerformanceRtgService', () => {
  let service: ExportEquipmentHandlingPerformanceRtgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportEquipmentHandlingPerformanceRtgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
