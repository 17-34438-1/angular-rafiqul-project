import { TestBed } from '@angular/core/testing';

import { ConvertIgmService } from './convert-igm.service';

describe('ConvertIgmService', () => {
  let service: ConvertIgmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertIgmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
