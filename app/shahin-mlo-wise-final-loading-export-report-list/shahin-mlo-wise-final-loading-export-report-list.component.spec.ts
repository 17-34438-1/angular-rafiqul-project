import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinMloWiseFinalLoadingExportReportListComponent } from './shahin-mlo-wise-final-loading-export-report-list.component';

describe('ShahinMloWiseFinalLoadingExportReportListComponent', () => {
  let component: ShahinMloWiseFinalLoadingExportReportListComponent;
  let fixture: ComponentFixture<ShahinMloWiseFinalLoadingExportReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinMloWiseFinalLoadingExportReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinMloWiseFinalLoadingExportReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
