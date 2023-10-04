import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportBlankBayViewListComponent } from './export-blank-bay-view-list.component';

describe('ExportBlankBayViewListComponent', () => {
  let component: ExportBlankBayViewListComponent;
  let fixture: ComponentFixture<ExportBlankBayViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportBlankBayViewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportBlankBayViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
