import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWiseExcelUploadedReportListComponent } from './export-mlo-wise-excel-uploaded-report-list.component';

describe('ExportMloWiseExcelUploadedReportListComponent', () => {
  let component: ExportMloWiseExcelUploadedReportListComponent;
  let fixture: ComponentFixture<ExportMloWiseExcelUploadedReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWiseExcelUploadedReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWiseExcelUploadedReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
