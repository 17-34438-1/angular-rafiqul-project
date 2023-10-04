import { TestBed } from '@angular/core/testing';

import { DgManifestReportService } from './dg-manifest-report.service';

describe('DgManifestReportService', () => {
  let service: DgManifestReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgManifestReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
