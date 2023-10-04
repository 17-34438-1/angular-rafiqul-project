import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAssignmentSheetForOutwadPangonListComponent } from './export-assignment-sheet-for-outwad-pangon-list.component';

describe('ExportAssignmentSheetForOutwadPangonListComponent', () => {
  let component: ExportAssignmentSheetForOutwadPangonListComponent;
  let fixture: ComponentFixture<ExportAssignmentSheetForOutwadPangonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportAssignmentSheetForOutwadPangonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportAssignmentSheetForOutwadPangonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
