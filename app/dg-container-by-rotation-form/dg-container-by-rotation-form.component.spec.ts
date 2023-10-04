import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainerByRotationFormComponent } from './dg-container-by-rotation-form.component';

describe('DgContainerByRotationFormComponent', () => {
  let component: DgContainerByRotationFormComponent;
  let fixture: ComponentFixture<DgContainerByRotationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainerByRotationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainerByRotationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
