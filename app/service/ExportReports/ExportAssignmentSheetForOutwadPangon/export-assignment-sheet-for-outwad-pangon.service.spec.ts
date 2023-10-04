import { TestBed } from '@angular/core/testing';

import { ExportAssignmentSheetForOutwadPangonService } from './export-assignment-sheet-for-outwad-pangon.service';

describe('ExportAssignmentSheetForOutwadPangonService', () => {
  let service: ExportAssignmentSheetForOutwadPangonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportAssignmentSheetForOutwadPangonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
