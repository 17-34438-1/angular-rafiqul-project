import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEquipmentHandlingPerformanceRtgListComponent } from './export-equipment-handling-performance-rtg-list.component';

describe('ExportEquipmentHandlingPerformanceRtgListComponent', () => {
  let component: ExportEquipmentHandlingPerformanceRtgListComponent;
  let fixture: ComponentFixture<ExportEquipmentHandlingPerformanceRtgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportEquipmentHandlingPerformanceRtgListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportEquipmentHandlingPerformanceRtgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
