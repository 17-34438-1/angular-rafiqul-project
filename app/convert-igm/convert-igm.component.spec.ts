import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertIgmComponent } from './convert-igm.component';

describe('ConvertIgmComponent', () => {
  let component: ConvertIgmComponent;
  let fixture: ComponentFixture<ConvertIgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertIgmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertIgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
