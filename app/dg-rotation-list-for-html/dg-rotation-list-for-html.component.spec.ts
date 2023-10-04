import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgRotationListForHtmlComponent } from './dg-rotation-list-for-html.component';

describe('DgRotationListForHtmlComponent', () => {
  let component: DgRotationListForHtmlComponent;
  let fixture: ComponentFixture<DgRotationListForHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgRotationListForHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgRotationListForHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
