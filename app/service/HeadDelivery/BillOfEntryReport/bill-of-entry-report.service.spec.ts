import { TestBed } from '@angular/core/testing';

import { BillOfEntryReportService } from './bill-of-entry-report.service';

describe('BillOfEntryReportService', () => {
  let service: BillOfEntryReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillOfEntryReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
