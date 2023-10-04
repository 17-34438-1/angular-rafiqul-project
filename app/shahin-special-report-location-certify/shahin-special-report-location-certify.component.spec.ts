import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinSpecialReportLocationCertifyComponent } from './shahin-special-report-location-certify.component';

describe('ShahinSpecialReportLocationCertifyComponent', () => {
  let component: ShahinSpecialReportLocationCertifyComponent;
  let fixture: ComponentFixture<ShahinSpecialReportLocationCertifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinSpecialReportLocationCertifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinSpecialReportLocationCertifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
