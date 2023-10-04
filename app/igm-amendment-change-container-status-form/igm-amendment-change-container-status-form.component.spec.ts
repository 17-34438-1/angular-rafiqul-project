import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgmAmendmentChangeContainerStatusFormComponent } from './igm-amendment-change-container-status-form.component';

describe('IgmAmendmentChangeContainerStatusFormComponent', () => {
  let component: IgmAmendmentChangeContainerStatusFormComponent;
  let fixture: ComponentFixture<IgmAmendmentChangeContainerStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgmAmendmentChangeContainerStatusFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgmAmendmentChangeContainerStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
