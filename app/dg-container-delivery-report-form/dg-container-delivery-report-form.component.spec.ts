import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainerDeliveryReportFormComponent } from './dg-container-delivery-report-form.component';

describe('DgContainerDeliveryReportFormComponent', () => {
  let component: DgContainerDeliveryReportFormComponent;
  let fixture: ComponentFixture<DgContainerDeliveryReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainerDeliveryReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainerDeliveryReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
