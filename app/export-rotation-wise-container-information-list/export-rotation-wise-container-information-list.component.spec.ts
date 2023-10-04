import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportRotationWiseContainerInformationListComponent } from './export-rotation-wise-container-information-list.component';

describe('ExportRotationWiseContainerInformationListComponent', () => {
  let component: ExportRotationWiseContainerInformationListComponent;
  let fixture: ComponentFixture<ExportRotationWiseContainerInformationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportRotationWiseContainerInformationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportRotationWiseContainerInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
