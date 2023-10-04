import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShahinSpecialReportLoadedContainerListComponent } from './shahin-special-report-loaded-container-list.component';

describe('ShahinSpecialReportLoadedContainerListComponent', () => {
  let component: ShahinSpecialReportLoadedContainerListComponent;
  let fixture: ComponentFixture<ShahinSpecialReportLoadedContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShahinSpecialReportLoadedContainerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahinSpecialReportLoadedContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
