import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMonthComponent } from './app-month.component';

describe('AppMonthComponent', () => {
  let component: AppMonthComponent;
  let fixture: ComponentFixture<AppMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
