import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-overall-summary',
  templateUrl: './overall-summary.component.html',
  styleUrls: ['./overall-summary.component.scss']
})
export class OverallSummaryComponent implements OnInit {
  latest:any;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getOverall().subscribe(x=>{
      var items = x.filter(i => i.confirmedCount >0);
      var sorted = items.sort((a, b) => b.dateId - a.dateId);
      if(sorted!= null && sorted.length >0)
      {
        this.latest = sorted[0];
      }
    });
  }
}
