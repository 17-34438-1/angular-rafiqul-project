import { TestBed } from '@angular/core/testing';

import { MloWiseExcelUploadedService } from './mlo-wise-excel-uploaded.service';

describe('MloWiseExcelUploadedService', () => {
  let service: MloWiseExcelUploadedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MloWiseExcelUploadedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
