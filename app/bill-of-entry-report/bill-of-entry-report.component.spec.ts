import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOfEntryReportComponent } from './bill-of-entry-report.component';

describe('BillOfEntryReportComponent', () => {
  let component: BillOfEntryReportComponent;
  let fixture: ComponentFixture<BillOfEntryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOfEntryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfEntryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
