import { TestBed } from '@angular/core/testing';

import { ExportRotationWiseExportContainerService } from './export-rotation-wise-export-container.service';

describe('ExportRotationWiseExportContainerService', () => {
  let service: ExportRotationWiseExportContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportRotationWiseExportContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
