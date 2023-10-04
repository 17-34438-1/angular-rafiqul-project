import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerToBeLoadedListComponent } from './export-container-to-be-loaded-list.component';

describe('ExportContainerToBeLoadedListComponent', () => {
  let component: ExportContainerToBeLoadedListComponent;
  let fixture: ComponentFixture<ExportContainerToBeLoadedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerToBeLoadedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerToBeLoadedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
