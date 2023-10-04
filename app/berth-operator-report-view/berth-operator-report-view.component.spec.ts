import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerthOperatorReportViewComponent } from './berth-operator-report-view.component';

describe('BerthOperatorReportViewComponent', () => {
  let component: BerthOperatorReportViewComponent;
  let fixture: ComponentFixture<BerthOperatorReportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerthOperatorReportViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerthOperatorReportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
