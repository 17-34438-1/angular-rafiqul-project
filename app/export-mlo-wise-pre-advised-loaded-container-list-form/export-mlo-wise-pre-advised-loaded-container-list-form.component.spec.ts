import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWisePreAdvisedLoadedContainerListFormComponent } from './export-mlo-wise-pre-advised-loaded-container-list-form.component';

describe('ExportMloWisePreAdvisedLoadedContainerListFormComponent', () => {
  let component: ExportMloWisePreAdvisedLoadedContainerListFormComponent;
  let fixture: ComponentFixture<ExportMloWisePreAdvisedLoadedContainerListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWisePreAdvisedLoadedContainerListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWisePreAdvisedLoadedContainerListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
