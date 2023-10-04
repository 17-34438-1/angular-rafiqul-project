import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWiseExportSummaryListComponent } from './export-mlo-wise-export-summary-list.component';

describe('ExportMloWiseExportSummaryListComponent', () => {
  let component: ExportMloWiseExportSummaryListComponent;
  let fixture: ComponentFixture<ExportMloWiseExportSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWiseExportSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWiseExportSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
