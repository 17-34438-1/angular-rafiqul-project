import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRotationWiseContainerInformationFormComponent } from './export-rotation-wise-container-information-form.component';

describe('ExportRotationWiseContainerInformationFormComponent', () => {
  let component: ExportRotationWiseContainerInformationFormComponent;
  let fixture: ComponentFixture<ExportRotationWiseContainerInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRotationWiseContainerInformationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportRotationWiseContainerInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
