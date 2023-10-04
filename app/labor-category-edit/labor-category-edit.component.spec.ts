import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborCategoryEditComponent } from './labor-category-edit.component';

describe('LaborCategoryEditComponent', () => {
  let component: LaborCategoryEditComponent;
  let fixture: ComponentFixture<LaborCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
