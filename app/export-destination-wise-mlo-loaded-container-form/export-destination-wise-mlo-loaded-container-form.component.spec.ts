import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDestinationWiseMloLoadedContainerFormComponent } from './export-destination-wise-mlo-loaded-container-form.component';

describe('ExportDestinationWiseMloLoadedContainerFormComponent', () => {
  let component: ExportDestinationWiseMloLoadedContainerFormComponent;
  let fixture: ComponentFixture<ExportDestinationWiseMloLoadedContainerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportDestinationWiseMloLoadedContainerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDestinationWiseMloLoadedContainerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
