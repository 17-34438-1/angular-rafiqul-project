import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContDischargeSummaryListComponent } from './dg-cont-discharge-summary-list.component';

describe('DgContDischargeSummaryListComponent', () => {
  let component: DgContDischargeSummaryListComponent;
  let fixture: ComponentFixture<DgContDischargeSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContDischargeSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContDischargeSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
