import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyIncreaseComponent } from './daily-increase.component';

describe('DailyIncreaseComponent', () => {
  let component: DailyIncreaseComponent;
  let fixture: ComponentFixture<DailyIncreaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyIncreaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyIncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
