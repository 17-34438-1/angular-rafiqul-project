import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEquipmentHandlingPerformanceRtgFormComponent } from './export-equipment-handling-performance-rtg-form.component';

describe('ExportEquipmentHandlingPerformanceRtgFormComponent', () => {
  let component: ExportEquipmentHandlingPerformanceRtgFormComponent;
  let fixture: ComponentFixture<ExportEquipmentHandlingPerformanceRtgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportEquipmentHandlingPerformanceRtgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportEquipmentHandlingPerformanceRtgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
