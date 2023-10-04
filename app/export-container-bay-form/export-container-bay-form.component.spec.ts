import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerBayFormComponent } from './export-container-bay-form.component';

describe('ExportContainerBayFormComponent', () => {
  let component: ExportContainerBayFormComponent;
  let fixture: ComponentFixture<ExportContainerBayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerBayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerBayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
