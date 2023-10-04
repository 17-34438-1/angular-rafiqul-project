import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopinoComponent } from './copino.component';

describe('CopinoComponent', () => {
  let component: CopinoComponent;
  let fixture: ComponentFixture<CopinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
