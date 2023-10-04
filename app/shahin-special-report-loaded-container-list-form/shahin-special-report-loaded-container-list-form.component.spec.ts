import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinSpecialReportLoadedContainerListFormComponent } from './shahin-special-report-loaded-container-list-form.component';

describe('ShahinSpecialReportLoadedContainerListFormComponent', () => {
  let component: ShahinSpecialReportLoadedContainerListFormComponent;
  let fixture: ComponentFixture<ShahinSpecialReportLoadedContainerListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinSpecialReportLoadedContainerListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinSpecialReportLoadedContainerListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
