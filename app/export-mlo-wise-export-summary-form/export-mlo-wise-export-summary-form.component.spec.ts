import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWiseExportSummaryFormComponent } from './export-mlo-wise-export-summary-form.component';

describe('ExportMloWiseExportSummaryFormComponent', () => {
  let component: ExportMloWiseExportSummaryFormComponent;
  let fixture: ComponentFixture<ExportMloWiseExportSummaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWiseExportSummaryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWiseExportSummaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
