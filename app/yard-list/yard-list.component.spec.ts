import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardListComponent } from './yard-list.component';

describe('YardListComponent', () => {
  let component: YardListComponent;
  let fixture: ComponentFixture<YardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
