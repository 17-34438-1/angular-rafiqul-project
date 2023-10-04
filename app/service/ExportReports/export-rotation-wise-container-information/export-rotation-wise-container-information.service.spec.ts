import { TestBed } from '@angular/core/testing';

import { ExportRotationWiseContainerInformationService } from './export-rotation-wise-container-information.service';

describe('ExportRotationWiseContainerInformationService', () => {
  let service: ExportRotationWiseContainerInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportRotationWiseContainerInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
