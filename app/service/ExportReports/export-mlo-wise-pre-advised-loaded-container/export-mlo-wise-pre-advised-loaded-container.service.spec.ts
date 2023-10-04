import { TestBed } from '@angular/core/testing';

import { ExportMloWisePreAdvisedLoadedContainerService } from './export-mlo-wise-pre-advised-loaded-container.service';

describe('ExportMloWisePreAdvisedLoadedContainerService', () => {
  let service: ExportMloWisePreAdvisedLoadedContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportMloWisePreAdvisedLoadedContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
