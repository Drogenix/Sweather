import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthForecastDayDetailsComponent } from './month-forecast-day-details.component';

describe('AppMonthDetailedComponent', () => {
  let component: MonthForecastDayDetailsComponent;
  let fixture: ComponentFixture<MonthForecastDayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthForecastDayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthForecastDayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
