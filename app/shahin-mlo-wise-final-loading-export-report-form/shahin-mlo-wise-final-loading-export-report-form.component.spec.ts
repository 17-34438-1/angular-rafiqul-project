import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinMloWiseFinalLoadingExportReportFormComponent } from './shahin-mlo-wise-final-loading-export-report-form.component';

describe('ShahinMloWiseFinalLoadingExportReportFormComponent', () => {
  let component: ShahinMloWiseFinalLoadingExportReportFormComponent;
  let fixture: ComponentFixture<ShahinMloWiseFinalLoadingExportReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinMloWiseFinalLoadingExportReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinMloWiseFinalLoadingExportReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
