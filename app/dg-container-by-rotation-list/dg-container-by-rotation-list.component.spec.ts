import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgContainerByRotationListComponent } from './dg-container-by-rotation-list.component';

describe('DgContainerByRotationListComponent', () => {
  let component: DgContainerByRotationListComponent;
  let fixture: ComponentFixture<DgContainerByRotationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgContainerByRotationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgContainerByRotationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
