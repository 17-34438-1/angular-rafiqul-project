import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExcelUploadSampleWithLoadedContainerFormComponent } from './export-excel-upload-sample-with-loaded-container-form.component';

describe('ExportExcelUploadSampleWithLoadedContainerFormComponent', () => {
  let component: ExportExcelUploadSampleWithLoadedContainerFormComponent;
  let fixture: ComponentFixture<ExportExcelUploadSampleWithLoadedContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportExcelUploadSampleWithLoadedContainerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExcelUploadSampleWithLoadedContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
