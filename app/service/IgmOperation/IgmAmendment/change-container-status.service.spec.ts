import { TestBed } from '@angular/core/testing';

import { ChangeContainerStatusService } from './change-container-status.service';

describe('ChangeContainerStatusService', () => {
  let service: ChangeContainerStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeContainerStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
