import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainersDischargeSummaryListFormComponent } from './dg-containers-discharge-summary-list-form.component';

describe('DgContainersDischargeSummaryListFormComponent', () => {
  let component: DgContainersDischargeSummaryListFormComponent;
  let fixture: ComponentFixture<DgContainersDischargeSummaryListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainersDischargeSummaryListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainersDischargeSummaryListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
