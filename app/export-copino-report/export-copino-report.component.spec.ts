import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCopinoReportComponent } from './export-copino-report.component';

describe('ExportCopinoReportComponent', () => {
  let component: ExportCopinoReportComponent;
  let fixture: ComponentFixture<ExportCopinoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCopinoReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCopinoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
