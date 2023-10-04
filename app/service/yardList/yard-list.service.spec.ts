import { TestBed } from '@angular/core/testing';

import { YardListService } from './yard-list.service';

describe('YardListService', () => {
  let service: YardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
