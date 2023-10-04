import { TestBed } from '@angular/core/testing';

import { DgContainerByRotationService } from './dg-container-by-rotation.service';

describe('DgContainerByRotationService', () => {
  let service: DgContainerByRotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgContainerByRotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
