import { TestBed } from '@angular/core/testing';

import { ExportCommentsByShippingSectionOnExportVesselService } from './export-comments-by-shipping-section-on-export-vessel.service';

describe('ExportCommentsByShippingSectionOnExportVesselService', () => {
  let service: ExportCommentsByShippingSectionOnExportVesselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportCommentsByShippingSectionOnExportVesselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
