import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingReportListComponent } from './handling-report-list.component';

describe('HandlingReportListComponent', () => {
  let component: HandlingReportListComponent;
  let fixture: ComponentFixture<HandlingReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingReportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
