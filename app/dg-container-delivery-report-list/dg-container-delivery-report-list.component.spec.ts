import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainerDeliveryReportListComponent } from './dg-container-delivery-report-list.component';

describe('DgContainerDeliveryReportListComponent', () => {
  let component: DgContainerDeliveryReportListComponent;
  let fixture: ComponentFixture<DgContainerDeliveryReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainerDeliveryReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainerDeliveryReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
