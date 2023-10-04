import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerLoadingExcelReportListComponent } from './export-container-loading-excel-report-list.component';

describe('ExportContainerLoadingExcelReportListComponent', () => {
  let component: ExportContainerLoadingExcelReportListComponent;
  let fixture: ComponentFixture<ExportContainerLoadingExcelReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerLoadingExcelReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerLoadingExcelReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
