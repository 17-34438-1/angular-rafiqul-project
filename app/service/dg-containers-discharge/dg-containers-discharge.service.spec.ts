import { TestBed } from '@angular/core/testing';

import { DgContainersDischargeService } from './dg-containers-discharge.service';

describe('DgContainersDischargeService', () => {
  let service: DgContainersDischargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgContainersDischargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
