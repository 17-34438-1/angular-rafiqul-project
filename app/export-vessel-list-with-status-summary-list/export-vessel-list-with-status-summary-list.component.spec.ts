import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportVesselListWithStatusSummaryListComponent } from './export-vessel-list-with-status-summary-list.component';

describe('ExportVesselListWithStatusSummaryListComponent', () => {
  let component: ExportVesselListWithStatusSummaryListComponent;
  let fixture: ComponentFixture<ExportVesselListWithStatusSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportVesselListWithStatusSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportVesselListWithStatusSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
