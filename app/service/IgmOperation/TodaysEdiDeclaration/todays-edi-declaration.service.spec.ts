import { TestBed } from '@angular/core/testing';

import { TodaysEdiDeclarationService } from './todays-edi-declaration.service';

describe('TodaysEdiDeclarationService', () => {
  let service: TodaysEdiDeclarationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaysEdiDeclarationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
