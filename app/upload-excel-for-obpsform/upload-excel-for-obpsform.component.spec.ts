import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExcelForOBPSformComponent } from './upload-excel-for-obpsform.component';

describe('UploadExcelForOBPSformComponent', () => {
  let component: UploadExcelForOBPSformComponent;
  let fixture: ComponentFixture<UploadExcelForOBPSformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadExcelForOBPSformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadExcelForOBPSformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
