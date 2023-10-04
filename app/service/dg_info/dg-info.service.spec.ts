import { TestBed } from '@angular/core/testing';

import { DgInfoService } from './dg-info.service';

describe('DgInfoService', () => {
  let service: DgInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
