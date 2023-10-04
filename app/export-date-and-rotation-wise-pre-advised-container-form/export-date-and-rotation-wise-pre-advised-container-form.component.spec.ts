import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDateAndRotationWisePreAdvisedContainerFormComponent } from './export-date-and-rotation-wise-pre-advised-container-form.component';

describe('ExportDateAndRotationWisePreAdvisedContainerFormComponent', () => {
  let component: ExportDateAndRotationWisePreAdvisedContainerFormComponent;
  let fixture: ComponentFixture<ExportDateAndRotationWisePreAdvisedContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportDateAndRotationWisePreAdvisedContainerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDateAndRotationWisePreAdvisedContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
