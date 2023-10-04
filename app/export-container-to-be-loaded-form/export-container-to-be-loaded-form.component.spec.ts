import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerToBeLoadedFormComponent } from './export-container-to-be-loaded-form.component';

describe('ExportContainerToBeLoadedFormComponent', () => {
  let component: ExportContainerToBeLoadedFormComponent;
  let fixture: ComponentFixture<ExportContainerToBeLoadedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerToBeLoadedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerToBeLoadedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
