import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DginfoComponent } from './dginfo.component';

describe('DginfoComponent', () => {
  let component: DginfoComponent;
  let fixture: ComponentFixture<DginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DginfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
