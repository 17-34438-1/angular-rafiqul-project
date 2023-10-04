import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgManifestFormComponent } from './dg-manifest-form.component';

describe('DgManifestFormComponent', () => {
  let component: DgManifestFormComponent;
  let fixture: ComponentFixture<DgManifestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgManifestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgManifestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
