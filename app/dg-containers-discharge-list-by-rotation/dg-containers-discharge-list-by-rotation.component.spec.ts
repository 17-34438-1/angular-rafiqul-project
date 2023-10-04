import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainersDischargeListByRotationComponent } from './dg-containers-discharge-list-by-rotation.component';

describe('DgContainersDischargeListByRotationComponent', () => {
  let component: DgContainersDischargeListByRotationComponent;
  let fixture: ComponentFixture<DgContainersDischargeListByRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainersDischargeListByRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainersDischargeListByRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
