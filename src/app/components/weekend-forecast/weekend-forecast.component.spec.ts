import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendForecastComponent } from './weekend-forecast.component';

describe('AppWeekendComponent', () => {
  let component: WeekendForecastComponent;
  let fixture: ComponentFixture<WeekendForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekendForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekendForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
