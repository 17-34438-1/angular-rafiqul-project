import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysEdiDeclarationComponent } from './todays-edi-declaration.component';

describe('TodaysEdiDeclarationComponent', () => {
  let component: TodaysEdiDeclarationComponent;
  let fixture: ComponentFixture<TodaysEdiDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysEdiDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysEdiDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
