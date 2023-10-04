import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAssignmentSheetForOutwadPangonComponent } from './export-assignment-sheet-for-outwad-pangon.component';

describe('ExportAssignmentSheetForOutwadPangonComponent', () => {
  let component: ExportAssignmentSheetForOutwadPangonComponent;
  let fixture: ComponentFixture<ExportAssignmentSheetForOutwadPangonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportAssignmentSheetForOutwadPangonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportAssignmentSheetForOutwadPangonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
