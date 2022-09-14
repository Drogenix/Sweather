import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDailyComponent } from './app-daily.component';

describe('AppDailyComponent', () => {
  let component: AppDailyComponent;
  let fixture: ComponentFixture<AppDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
