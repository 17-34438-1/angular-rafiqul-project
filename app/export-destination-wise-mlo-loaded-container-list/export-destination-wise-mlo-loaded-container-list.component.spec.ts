import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportDestinationWiseMloLoadedContainerListComponent } from './export-destination-wise-mlo-loaded-container-list.component';

describe('ExportDestinationWiseMloLoadedContainerListComponent', () => {
  let component: ExportDestinationWiseMloLoadedContainerListComponent;
  let fixture: ComponentFixture<ExportDestinationWiseMloLoadedContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportDestinationWiseMloLoadedContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDestinationWiseMloLoadedContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
