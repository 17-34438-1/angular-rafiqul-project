import { TestBed } from '@angular/core/testing';

import { DateWiseBillOfEntryReportService } from './date-wise-bill-of-entry-report.service';

describe('DateWiseBillOfEntryReportService', () => {
  let service: DateWiseBillOfEntryReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateWiseBillOfEntryReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
