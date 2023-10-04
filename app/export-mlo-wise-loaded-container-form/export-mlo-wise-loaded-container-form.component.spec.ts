import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWiseLoadedContainerFormComponent } from './export-mlo-wise-loaded-container-form.component';

describe('ExportMloWiseLoadedContainerFormComponent', () => {
  let component: ExportMloWiseLoadedContainerFormComponent;
  let fixture: ComponentFixture<ExportMloWiseLoadedContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWiseLoadedContainerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWiseLoadedContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
