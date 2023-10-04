import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBlankBayViewFormComponent } from './export-blank-bay-view-form.component';

describe('ExportBlankBayViewFormComponent', () => {
  let component: ExportBlankBayViewFormComponent;
  let fixture: ComponentFixture<ExportBlankBayViewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportBlankBayViewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportBlankBayViewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
