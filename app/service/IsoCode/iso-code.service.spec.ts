import { TestBed } from '@angular/core/testing';

import { IsoCodeService } from './iso-code.service';

describe('IsoCodeService', () => {
  let service: IsoCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsoCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
