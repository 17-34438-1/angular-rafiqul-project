import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerthOperatorReportFormComponent } from './berth-operator-report-form.component';

describe('BerthOperatorReportFormComponent', () => {
  let component: BerthOperatorReportFormComponent;
  let fixture: ComponentFixture<BerthOperatorReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerthOperatorReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerthOperatorReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
