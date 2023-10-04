import { TestBed } from '@angular/core/testing';

import { HandlingReportService } from './handling-report.service';

describe('HandlingReportService', () => {
  let service: HandlingReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlingReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
