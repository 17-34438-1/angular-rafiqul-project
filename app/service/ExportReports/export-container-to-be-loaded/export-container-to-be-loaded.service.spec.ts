import { TestBed } from '@angular/core/testing';

import { ExportContainerToBeLoadedService } from './export-container-to-be-loaded.service';

describe('ExportContainerToBeLoadedService', () => {
  let service: ExportContainerToBeLoadedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportContainerToBeLoadedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
