import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoCodeComponent } from './iso-code.component';

describe('IsoCodeComponent', () => {
  let component: IsoCodeComponent;
  let fixture: ComponentFixture<IsoCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
