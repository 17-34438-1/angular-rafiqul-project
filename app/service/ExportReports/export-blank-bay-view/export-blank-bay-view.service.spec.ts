import { TestBed } from '@angular/core/testing';

import { ExportBlankBayViewService } from './export-blank-bay-view.service';

describe('ExportBlankBayViewService', () => {
  let service: ExportBlankBayViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportBlankBayViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
