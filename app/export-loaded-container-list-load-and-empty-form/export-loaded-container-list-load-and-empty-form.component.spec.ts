import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLoadedContainerListLoadAndEmptyFormComponent } from './export-loaded-container-list-load-and-empty-form.component';

describe('ExportLoadedContainerListLoadAndEmptyFormComponent', () => {
  let component: ExportLoadedContainerListLoadAndEmptyFormComponent;
  let fixture: ComponentFixture<ExportLoadedContainerListLoadAndEmptyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportLoadedContainerListLoadAndEmptyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportLoadedContainerListLoadAndEmptyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
