import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadExcelForPangaonComponent } from './upload-excel-for-pangaon.component';

describe('UploadExcelForPangaonComponent', () => {
  let component: UploadExcelForPangaonComponent;
  let fixture: ComponentFixture<UploadExcelForPangaonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadExcelForPangaonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadExcelForPangaonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
