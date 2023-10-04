import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinMloWiseFinalLoadingDetailsExportReportListComponent } from './shahin-mlo-wise-final-loading-details-export-report-list.component';

describe('ShahinMloWiseFinalLoadingDetailsExportReportListComponent', () => {
  let component: ShahinMloWiseFinalLoadingDetailsExportReportListComponent;
  let fixture: ComponentFixture<ShahinMloWiseFinalLoadingDetailsExportReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinMloWiseFinalLoadingDetailsExportReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinMloWiseFinalLoadingDetailsExportReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
