import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-countries-summary',
  templateUrl: './countries-summary.component.html',
  styleUrls: ['./countries-summary.component.scss']
})
export class CountriesSummaryComponent implements AfterViewInit {
  public top3Countries: [];
  
  colors: string[] = [
    '#8dd3c7',
    '#ffffb3',
    '#bebada',
    '#fb8072',
    '#80b1d3',
    '#fdb462',
    '#b3de69',
    '#fccde5',
    '#d9d9d9',
    '#bc80bd',
  ];
  canvas: any;
  ctx: any;

  constructor(private covidService:CovidService) { }

  ngAfterViewInit(): void {
    this.covidService.getLatest().subscribe((x) => {
      var sorted = x.sort(
        (a, b) => b.counter.confirmedIncr - a.counter.confirmedIncr
      );

      this.top3Countries = sorted.slice(0,3);
      var topItems = sorted.slice(0, 10);
      var labels = topItems.map((x) => x.countryEnglishName);
      var data = topItems.map((x) => x.counter.confirmedIncr);
      this.buildChart(labels, data);
    });
  }

  private buildChart(labels, data) {
    this.canvas = document.getElementById('countries-summary-pie-chart');
    this.ctx = this.canvas.getContext('2d');
    let mychart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          label: "Percentage of coountries",
          backgroundColor: this.colors,
          data: data,
        }]
      },
      options: {
        responsive: true,
        legend: { display: false },
        title: {
          display: false,
        }
      },      
    });
  }
}
