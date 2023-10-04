import { TestBed } from '@angular/core/testing';

import { ShahinSpecialReportLoadedContainerService } from './shahin-special-report-loaded-container.service';

describe('ShahinSpecialReportLoadedContainerService', () => {
  let service: ShahinSpecialReportLoadedContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShahinSpecialReportLoadedContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
