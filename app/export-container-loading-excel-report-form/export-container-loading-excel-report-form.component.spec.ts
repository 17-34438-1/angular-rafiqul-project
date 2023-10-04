import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerLoadingExcelReportFormComponent } from './export-container-loading-excel-report-form.component';

describe('ExportContainerLoadingExcelReportFormComponent', () => {
  let component: ExportContainerLoadingExcelReportFormComponent;
  let fixture: ComponentFixture<ExportContainerLoadingExcelReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerLoadingExcelReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerLoadingExcelReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
