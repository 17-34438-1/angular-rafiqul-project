import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoDListComponent } from './po-dlist.component';

describe('PoDListComponent', () => {
  let component: PoDListComponent;
  let fixture: ComponentFixture<PoDListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoDListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
