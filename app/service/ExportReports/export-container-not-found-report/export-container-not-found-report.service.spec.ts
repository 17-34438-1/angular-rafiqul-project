import { TestBed } from '@angular/core/testing';

import { ExportContainerNotFoundReportService } from './export-container-not-found-report.service';

describe('ExportContainerNotFoundReportService', () => {
  let service: ExportContainerNotFoundReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportContainerNotFoundReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
