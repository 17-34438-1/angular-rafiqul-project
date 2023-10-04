import { TestBed } from '@angular/core/testing';

import { ExportDestinationWiseMloLoadedContainerService } from './export-destination-wise-mlo-loaded-container.service';

describe('ExportDestinationWiseMloLoadedContainerService', () => {
  let service: ExportDestinationWiseMloLoadedContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportDestinationWiseMloLoadedContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
