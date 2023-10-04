import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborCategoryAddComponent } from './labor-category-add.component';

describe('LaborCategoryAddComponent', () => {
  let component: LaborCategoryAddComponent;
  let fixture: ComponentFixture<LaborCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
