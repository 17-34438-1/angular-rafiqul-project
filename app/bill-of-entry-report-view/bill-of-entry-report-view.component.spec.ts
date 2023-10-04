import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillOfEntryReportViewComponent } from './bill-of-entry-report-view.component';

describe('BillOfEntryReportViewComponent', () => {
  let component: BillOfEntryReportViewComponent;
  let fixture: ComponentFixture<BillOfEntryReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillOfEntryReportViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfEntryReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
