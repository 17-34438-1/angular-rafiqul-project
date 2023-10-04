import { TestBed } from '@angular/core/testing';

import { ExportContainerLoadingExcelReportService } from './export-container-loading-excel-report.service';

describe('ExportContainerLoadingExcelReportService', () => {
  let service: ExportContainerLoadingExcelReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportContainerLoadingExcelReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
