import { TestBed } from '@angular/core/testing';

import { UploadExcelForPangaonService } from './upload-excel-for-pangaon.service';

describe('UploadExcelForPangaonService', () => {
  let service: UploadExcelForPangaonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadExcelForPangaonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
