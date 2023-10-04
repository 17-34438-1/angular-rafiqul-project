import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainersDischargeListByRotationFormComponent } from './dg-containers-discharge-list-by-rotation-form.component';

describe('DgContainersDischargeListByRotationFormComponent', () => {
  let component: DgContainersDischargeListByRotationFormComponent;
  let fixture: ComponentFixture<DgContainersDischargeListByRotationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainersDischargeListByRotationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainersDischargeListByRotationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
