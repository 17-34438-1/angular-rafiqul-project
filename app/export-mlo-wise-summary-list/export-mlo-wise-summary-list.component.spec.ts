import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWiseSummaryListComponent } from './export-mlo-wise-summary-list.component';

describe('ExportMloWiseSummaryListComponent', () => {
  let component: ExportMloWiseSummaryListComponent;
  let fixture: ComponentFixture<ExportMloWiseSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWiseSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWiseSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
