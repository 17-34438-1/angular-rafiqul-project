import { TestBed } from '@angular/core/testing';

import { ConvertPangaonContainerService } from './convert-pangaon-container.service';

describe('ConvertPangaonContainerService', () => {
  let service: ConvertPangaonContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertPangaonContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
