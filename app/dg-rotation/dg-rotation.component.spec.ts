import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgRotationComponent } from './dg-rotation.component';

describe('DgRotationComponent', () => {
  let component: DgRotationComponent;
  let fixture: ComponentFixture<DgRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
