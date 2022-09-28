import { TestBed } from '@angular/core/testing';

import { DailyWeatherInfoResolveService } from './daily-weather-info-resolve.service';

describe('DailyWeatherInfoService', () => {
  let service: DailyWeatherInfoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyWeatherInfoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
