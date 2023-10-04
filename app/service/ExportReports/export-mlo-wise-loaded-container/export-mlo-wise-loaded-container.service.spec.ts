import { TestBed } from '@angular/core/testing';

import { ExportMloWiseLoadedContainerService } from './export-mlo-wise-loaded-container.service';

describe('ExportMloWiseLoadedContainerService', () => {
  let service: ExportMloWiseLoadedContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportMloWiseLoadedContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
