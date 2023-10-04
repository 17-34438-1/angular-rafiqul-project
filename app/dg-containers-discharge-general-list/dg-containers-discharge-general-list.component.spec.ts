import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainersDischargeGeneralListComponent } from './dg-containers-discharge-general-list.component';

describe('DgContainersDischargeGeneralListComponent', () => {
  let component: DgContainersDischargeGeneralListComponent;
  let fixture: ComponentFixture<DgContainersDischargeGeneralListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainersDischargeGeneralListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainersDischargeGeneralListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
