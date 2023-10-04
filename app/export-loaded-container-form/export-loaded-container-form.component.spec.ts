import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLoadedContainerFormComponent } from './export-loaded-container-form.component';

describe('ExportLoadedContainerFormComponent', () => {
  let component: ExportLoadedContainerFormComponent;
  let fixture: ComponentFixture<ExportLoadedContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportLoadedContainerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportLoadedContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
