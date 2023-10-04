import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingReportFormComponent } from './handling-report-form.component';

describe('HandlingReportFormComponent', () => {
  let component: HandlingReportFormComponent;
  let fixture: ComponentFixture<HandlingReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
