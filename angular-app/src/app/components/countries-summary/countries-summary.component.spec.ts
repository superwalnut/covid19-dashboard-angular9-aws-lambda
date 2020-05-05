import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSummaryComponent } from './countries-summary.component';

describe('CountriesSummaryComponent', () => {
  let component: CountriesSummaryComponent;
  let fixture: ComponentFixture<CountriesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
