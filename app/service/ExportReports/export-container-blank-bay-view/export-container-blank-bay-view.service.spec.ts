import { TestBed } from '@angular/core/testing';

import { ExportContainerBlankBayViewService } from './export-container-blank-bay-view.service';

describe('ExportContainerBlankBayViewService', () => {
  let service: ExportContainerBlankBayViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportContainerBlankBayViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
