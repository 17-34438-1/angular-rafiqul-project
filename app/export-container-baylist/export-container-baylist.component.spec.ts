import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContainerBaylistComponent } from './export-container-baylist.component';

describe('ExportContainerBaylistComponent', () => {
  let component: ExportContainerBaylistComponent;
  let fixture: ComponentFixture<ExportContainerBaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportContainerBaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportContainerBaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
