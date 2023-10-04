import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDateAndRotationWisePreAdvisedContainerListComponent } from './export-date-and-rotation-wise-pre-advised-container-list.component';

describe('ExportDateAndRotationWisePreAdvisedContainerListComponent', () => {
  let component: ExportDateAndRotationWisePreAdvisedContainerListComponent;
  let fixture: ComponentFixture<ExportDateAndRotationWisePreAdvisedContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportDateAndRotationWisePreAdvisedContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDateAndRotationWisePreAdvisedContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
