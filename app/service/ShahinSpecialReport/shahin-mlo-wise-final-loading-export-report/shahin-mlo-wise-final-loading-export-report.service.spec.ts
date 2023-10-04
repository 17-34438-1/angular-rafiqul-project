import { TestBed } from '@angular/core/testing';

import { ShahinMloWiseFinalLoadingExportReportService } from './shahin-mlo-wise-final-loading-export-report.service';

describe('ShahinMloWiseFinalLoadingExportReportService', () => {
  let service: ShahinMloWiseFinalLoadingExportReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShahinMloWiseFinalLoadingExportReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
