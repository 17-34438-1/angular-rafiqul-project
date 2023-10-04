import { TestBed } from '@angular/core/testing';

import { BerthOperatorReportService } from './berth-operator-report.service';

describe('BerthOperatorReportService', () => {
  let service: BerthOperatorReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerthOperatorReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
