import { TestBed } from '@angular/core/testing';

import { ContainerBlockReportService } from './container-block-report.service';

describe('ContainerBlockReportService', () => {
  let service: ContainerBlockReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerBlockReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
