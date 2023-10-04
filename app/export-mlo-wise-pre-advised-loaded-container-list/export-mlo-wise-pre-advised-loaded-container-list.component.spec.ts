import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWisePreAdvisedLoadedContainerListComponent } from './export-mlo-wise-pre-advised-loaded-container-list.component';

describe('ExportMloWisePreAdvisedLoadedContainerListComponent', () => {
  let component: ExportMloWisePreAdvisedLoadedContainerListComponent;
  let fixture: ComponentFixture<ExportMloWisePreAdvisedLoadedContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWisePreAdvisedLoadedContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWisePreAdvisedLoadedContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
