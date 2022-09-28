import { TestBed } from '@angular/core/testing';

import { WeatherInfoResolveService } from './weather-info-resolve.service';

describe('WeatherInfoResolveService', () => {
  let service: WeatherInfoResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherInfoResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
