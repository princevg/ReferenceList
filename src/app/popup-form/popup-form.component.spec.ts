import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPopupFormComponent } from './popup-form.component';

describe('PopupFormComponent', () => {
  let component: AppPopupFormComponent;
  let fixture: ComponentFixture<AppPopupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPopupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPopupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
