import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTimelineComponent } from './overall-timeline.component';

describe('OverallTimelineComponent', () => {
  let component: OverallTimelineComponent;
  let fixture: ComponentFixture<OverallTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
