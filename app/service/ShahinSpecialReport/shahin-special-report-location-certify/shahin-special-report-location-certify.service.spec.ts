import { TestBed } from '@angular/core/testing';

import { ShahinSpecialReportLocationCertifyService } from './shahin-special-report-location-certify.service';

describe('ShahinSpecialReportLocationCertifyService', () => {
  let service: ShahinSpecialReportLocationCertifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShahinSpecialReportLocationCertifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
