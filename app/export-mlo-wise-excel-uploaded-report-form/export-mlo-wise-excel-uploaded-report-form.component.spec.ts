import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWiseExcelUploadedReportFormComponent } from './export-mlo-wise-excel-uploaded-report-form.component';

describe('ExportMloWiseExcelUploadedReportFormComponent', () => {
  let component: ExportMloWiseExcelUploadedReportFormComponent;
  let fixture: ComponentFixture<ExportMloWiseExcelUploadedReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWiseExcelUploadedReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWiseExcelUploadedReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
