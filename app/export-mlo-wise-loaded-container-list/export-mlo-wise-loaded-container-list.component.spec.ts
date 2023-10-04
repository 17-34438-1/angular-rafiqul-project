import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWiseLoadedContainerListComponent } from './export-mlo-wise-loaded-container-list.component';

describe('ExportMloWiseLoadedContainerListComponent', () => {
  let component: ExportMloWiseLoadedContainerListComponent;
  let fixture: ComponentFixture<ExportMloWiseLoadedContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWiseLoadedContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWiseLoadedContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
