import { TestBed } from '@angular/core/testing';

import { ExportLoadedContainerService } from './export-loaded-container.service';

describe('ExportLoadedContainerService', () => {
  let service: ExportLoadedContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportLoadedContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
