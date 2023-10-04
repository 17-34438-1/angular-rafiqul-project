import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerBlockReportFormComponent } from './export-container-block-report-form.component';

describe('ExportContainerBlockReportFormComponent', () => {
  let component: ExportContainerBlockReportFormComponent;
  let fixture: ComponentFixture<ExportContainerBlockReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerBlockReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerBlockReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
