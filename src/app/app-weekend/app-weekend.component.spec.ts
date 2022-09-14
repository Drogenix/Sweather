import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeekendComponent } from './app-weekend.component';

describe('AppWeekendComponent', () => {
  let component: AppWeekendComponent;
  let fixture: ComponentFixture<AppWeekendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppWeekendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeekendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
