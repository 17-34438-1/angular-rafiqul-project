import { TestBed } from '@angular/core/testing';

import { CopinoService } from './copino.service';

describe('CopinoService', () => {
  let service: CopinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
