import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-daily-increase',
  templateUrl: './daily-increase.component.html',
  styleUrls: ['./daily-increase.component.scss'],
})
export class DailyIncreaseComponent implements AfterViewInit {
  colors : string[] = [
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

  constructor(private covidService: CovidService) {}

  ngAfterViewInit(): void {
    this.covidService.loadLatest().subscribe((x) => {
      var sorted = x.sort(
        (a, b) => b.counter.confirmedIncr - a.counter.confirmedIncr
      );

      var topItems = sorted.slice(0, 10);
      var labels = topItems.map((x) => x.countryEnglishName);
      var data = topItems.map((x) => x.counter.confirmedIncr);
      this.buildChart(labels, data);
    });
  }

  private buildChart(labels, data) {
    this.canvas = document.getElementById('daily-increase-chart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Daily Confirmed',
            data: data,
            borderWidth: 1,
            backgroundColor: this.colors,
          },
        ],
      },
      options: {
        responsive: true,
        legend: { display: false },
        title: {
          display: false,
        },
      },
    });
  }
}
