import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopinoHtmlComponent } from './copino-html.component';

describe('CopinoHtmlComponent', () => {
  let component: CopinoHtmlComponent;
  let fixture: ComponentFixture<CopinoHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopinoHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopinoHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
