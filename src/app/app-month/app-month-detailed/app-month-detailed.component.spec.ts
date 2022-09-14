import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMonthDetailedComponent } from './app-month-detailed.component';

describe('AppMonthDetailedComponent', () => {
  let component: AppMonthDetailedComponent;
  let fixture: ComponentFixture<AppMonthDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMonthDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMonthDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
