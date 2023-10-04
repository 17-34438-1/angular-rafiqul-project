import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerNotFoundReportFormComponent } from './export-container-not-found-report-form.component';

describe('ExportContainerNotFoundReportFormComponent', () => {
  let component: ExportContainerNotFoundReportFormComponent;
  let fixture: ComponentFixture<ExportContainerNotFoundReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerNotFoundReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerNotFoundReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
