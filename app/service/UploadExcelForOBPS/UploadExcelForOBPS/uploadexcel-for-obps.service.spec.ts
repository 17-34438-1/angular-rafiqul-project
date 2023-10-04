import { TestBed } from '@angular/core/testing';

import { UploadexcelForOBPSService } from './uploadexcel-for-obps.service';

describe('UploadexcelForOBPSService', () => {
  let service: UploadexcelForOBPSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadexcelForOBPSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
