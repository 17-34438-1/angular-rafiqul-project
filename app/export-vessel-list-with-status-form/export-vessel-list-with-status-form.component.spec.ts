import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportVesselListWithStatusFormComponent } from './export-vessel-list-with-status-form.component';

describe('ExportVesselListWithStatusFormComponent', () => {
  let component: ExportVesselListWithStatusFormComponent;
  let fixture: ComponentFixture<ExportVesselListWithStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportVesselListWithStatusFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportVesselListWithStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
