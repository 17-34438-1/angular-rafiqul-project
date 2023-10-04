import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerNotFoundReportListComponent } from './export-container-not-found-report-list.component';

describe('ExportContainerNotFoundReportListComponent', () => {
  let component: ExportContainerNotFoundReportListComponent;
  let fixture: ComponentFixture<ExportContainerNotFoundReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerNotFoundReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerNotFoundReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
