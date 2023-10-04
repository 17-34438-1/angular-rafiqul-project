import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCopinoFormComponent } from './export-copino-form.component';

describe('ExportCopinoFormComponent', () => {
  let component: ExportCopinoFormComponent;
  let fixture: ComponentFixture<ExportCopinoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportCopinoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportCopinoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
