import { TestBed } from '@angular/core/testing';

import { DgContainerDeliveryReportService } from './dg-container-delivery-report.service';

describe('DgContainerDeliveryReportService', () => {
  let service: DgContainerDeliveryReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgContainerDeliveryReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
