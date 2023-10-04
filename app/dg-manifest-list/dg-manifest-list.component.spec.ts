import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgManifestListComponent } from './dg-manifest-list.component';

describe('DgManifestListComponent', () => {
  let component: DgManifestListComponent;
  let fixture: ComponentFixture<DgManifestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgManifestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgManifestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
