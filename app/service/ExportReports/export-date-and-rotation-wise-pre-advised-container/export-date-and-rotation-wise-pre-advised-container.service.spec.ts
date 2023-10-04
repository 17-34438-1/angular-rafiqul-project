import { TestBed } from '@angular/core/testing';

import { ExportDateAndRotationWisePreAdvisedContainerService } from './export-date-and-rotation-wise-pre-advised-container.service';

describe('ExportDateAndRotationWisePreAdvisedContainerService', () => {
  let service: ExportDateAndRotationWisePreAdvisedContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportDateAndRotationWisePreAdvisedContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
