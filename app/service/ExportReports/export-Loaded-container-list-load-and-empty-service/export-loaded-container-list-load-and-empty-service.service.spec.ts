import { TestBed } from '@angular/core/testing';

import { ExportLoadedContainerListLoadAndEmptyServiceService } from './export-loaded-container-list-load-and-empty-service.service';

describe('ExportLoadedContainerListLoadAndEmptyServiceService', () => {
  let service: ExportLoadedContainerListLoadAndEmptyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportLoadedContainerListLoadAndEmptyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
