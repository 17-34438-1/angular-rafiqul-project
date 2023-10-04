import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCommentsByShippingSectionOnExportVesselFormComponent } from './export-comments-by-shipping-section-on-export-vessel-form.component';

describe('ExportCommentsByShippingSectionOnExportVesselFormComponent', () => {
  let component: ExportCommentsByShippingSectionOnExportVesselFormComponent;
  let fixture: ComponentFixture<ExportCommentsByShippingSectionOnExportVesselFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCommentsByShippingSectionOnExportVesselFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCommentsByShippingSectionOnExportVesselFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
