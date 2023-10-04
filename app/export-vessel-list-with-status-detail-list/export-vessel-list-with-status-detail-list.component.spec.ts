import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportVesselListWithStatusDetailListComponent } from './export-vessel-list-with-status-detail-list.component';

describe('ExportVesselListWithStatusDetailListComponent', () => {
  let component: ExportVesselListWithStatusDetailListComponent;
  let fixture: ComponentFixture<ExportVesselListWithStatusDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportVesselListWithStatusDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportVesselListWithStatusDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
