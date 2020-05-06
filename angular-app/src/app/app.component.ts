import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private covidService:CovidService) {
    this.covidService.callOverall();
    this.covidService.callLatest();
  }  
}
