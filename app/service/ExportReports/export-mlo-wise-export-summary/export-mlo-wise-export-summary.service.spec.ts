import { TestBed } from '@angular/core/testing';

import { ExportMloWiseExportSummaryService } from './export-mlo-wise-export-summary.service';

describe('ExportMloWiseExportSummaryService', () => {
  let service: ExportMloWiseExportSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportMloWiseExportSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
