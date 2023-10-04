import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseBillOfEntryReportFormComponent } from './date-wise-bill-of-entry-report-form.component';

describe('DateWiseBillOfEntryReportFormComponent', () => {
  let component: DateWiseBillOfEntryReportFormComponent;
  let fixture: ComponentFixture<DateWiseBillOfEntryReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseBillOfEntryReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseBillOfEntryReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
