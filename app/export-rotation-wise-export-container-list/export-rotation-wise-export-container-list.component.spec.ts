import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRotationWiseExportContainerListComponent } from './export-rotation-wise-export-container-list.component';

describe('ExportRotationWiseExportContainerListComponent', () => {
  let component: ExportRotationWiseExportContainerListComponent;
  let fixture: ComponentFixture<ExportRotationWiseExportContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRotationWiseExportContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportRotationWiseExportContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
