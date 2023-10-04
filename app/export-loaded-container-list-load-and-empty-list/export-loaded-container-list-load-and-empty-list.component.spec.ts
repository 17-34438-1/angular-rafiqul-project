import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLoadedContainerListLoadAndEmptyListComponent } from './export-loaded-container-list-load-and-empty-list.component';

describe('ExportLoadedContainerListLoadAndEmptyListComponent', () => {
  let component: ExportLoadedContainerListLoadAndEmptyListComponent;
  let fixture: ComponentFixture<ExportLoadedContainerListLoadAndEmptyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportLoadedContainerListLoadAndEmptyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportLoadedContainerListLoadAndEmptyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
