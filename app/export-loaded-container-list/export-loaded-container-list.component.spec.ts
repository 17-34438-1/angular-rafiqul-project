import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLoadedContainerListComponent } from './export-loaded-container-list.component';

describe('ExportLoadedContainerListComponent', () => {
  let component: ExportLoadedContainerListComponent;
  let fixture: ComponentFixture<ExportLoadedContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportLoadedContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportLoadedContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
