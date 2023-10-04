import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExcelUploadSampleWithLoadedContainerListComponent } from './export-excel-upload-sample-with-loaded-container-list.component';

describe('ExportExcelUploadSampleWithLoadedContainerListComponent', () => {
  let component: ExportExcelUploadSampleWithLoadedContainerListComponent;
  let fixture: ComponentFixture<ExportExcelUploadSampleWithLoadedContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportExcelUploadSampleWithLoadedContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExcelUploadSampleWithLoadedContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
