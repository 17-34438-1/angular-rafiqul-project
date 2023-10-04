import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerBlockReportListComponent } from './export-container-block-report-list.component';

describe('ExportContainerBlockReportListComponent', () => {
  let component: ExportContainerBlockReportListComponent;
  let fixture: ComponentFixture<ExportContainerBlockReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerBlockReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerBlockReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
