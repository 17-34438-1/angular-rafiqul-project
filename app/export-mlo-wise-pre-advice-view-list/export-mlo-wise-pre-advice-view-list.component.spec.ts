import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMloWisePreAdviceViewListComponent } from './export-mlo-wise-pre-advice-view-list.component';

describe('ExportMloWisePreAdviceViewListComponent', () => {
  let component: ExportMloWisePreAdviceViewListComponent;
  let fixture: ComponentFixture<ExportMloWisePreAdviceViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMloWisePreAdviceViewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMloWisePreAdviceViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
