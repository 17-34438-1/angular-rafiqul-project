import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseBillOfEntryReportComponent } from './date-wise-bill-of-entry-report.component';

describe('DateWiseBillOfEntryReportComponent', () => {
  let component: DateWiseBillOfEntryReportComponent;
  let fixture: ComponentFixture<DateWiseBillOfEntryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWiseBillOfEntryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseBillOfEntryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
