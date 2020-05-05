import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DailyIncreaseComponent } from './components/daily-increase/daily-increase.component';
import { CountriesSummaryComponent } from './components/countries-summary/countries-summary.component';
import { OverallTimelineComponent } from './components/overall-timeline/overall-timeline.component';
import { OverallSummaryComponent } from './components/overall-summary/overall-summary.component';
import { MailingListComponent } from './components/mailing-list/mailing-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DailyIncreaseComponent,
    CountriesSummaryComponent,
    OverallTimelineComponent,
    OverallSummaryComponent,
    MailingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
