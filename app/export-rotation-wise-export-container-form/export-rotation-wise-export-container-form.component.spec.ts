import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRotationWiseExportContainerFormComponent } from './export-rotation-wise-export-container-form.component';

describe('ExportRotationWiseExportContainerFormComponent', () => {
  let component: ExportRotationWiseExportContainerFormComponent;
  let fixture: ComponentFixture<ExportRotationWiseExportContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRotationWiseExportContainerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportRotationWiseExportContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
