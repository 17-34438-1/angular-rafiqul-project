import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCommentsByShippingSectionOnExportVesselListComponent } from './export-comments-by-shipping-section-on-export-vessel-list.component';

describe('ExportCommentsByShippingSectionOnExportVesselListComponent', () => {
  let component: ExportCommentsByShippingSectionOnExportVesselListComponent;
  let fixture: ComponentFixture<ExportCommentsByShippingSectionOnExportVesselListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCommentsByShippingSectionOnExportVesselListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCommentsByShippingSectionOnExportVesselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
