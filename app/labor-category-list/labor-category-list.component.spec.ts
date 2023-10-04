import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborCategoryListComponent } from './labor-category-list.component';

describe('LaborCategoryListComponent', () => {
  let component: LaborCategoryListComponent;
  let fixture: ComponentFixture<LaborCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
