import { TestBed } from '@angular/core/testing';

import { ExportVesselListWithStatusService } from './export-vessel-list-with-status.service';

describe('ExportVesselListWithStatusService', () => {
  let service: ExportVesselListWithStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportVesselListWithStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
