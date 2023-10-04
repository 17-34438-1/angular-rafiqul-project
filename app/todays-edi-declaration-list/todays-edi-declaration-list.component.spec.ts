import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysEdiDeclarationListComponent } from './todays-edi-declaration-list.component';

describe('TodaysEdiDeclarationListComponent', () => {
  let component: TodaysEdiDeclarationListComponent;
  let fixture: ComponentFixture<TodaysEdiDeclarationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysEdiDeclarationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysEdiDeclarationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
