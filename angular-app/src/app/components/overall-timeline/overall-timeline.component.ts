import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-overall-timeline',
  templateUrl: './overall-timeline.component.html',
  styleUrls: ['./overall-timeline.component.scss'],
})
export class OverallTimelineComponent implements AfterViewInit {
  canvas: any;
  ctx: any;

  public days:number;
  public deaths:number;
  public confirmed:number;

  constructor(private covidService: CovidService) {}

  ngAfterViewInit(): void {
    this.covidService.loadOverall().subscribe((x) => {
      var items = x.filter((i) => i.confirmedCount > 0);
      var sorted = items.sort((a, b) => a.dateId - b.dateId);
      var confirmedCounts = sorted.map((x) => x.confirmedCount);
      var recoveredCounts = sorted.map((x) => x.curedCount);
      var deadCounts = sorted.map((x) => x.deadCount);
      var dates = sorted.map((x) => x.dateId);

      this.buildChart(dates, confirmedCounts, recoveredCounts, deadCounts);

      this.days = dates.length;
      this.deaths = deadCounts[deadCounts.length - 1];
      this.confirmed = confirmedCounts[confirmedCounts.length - 1];

    });
  }

  private buildChart(labels, data1, data2, data3) {
      this.canvas = document.getElementById('overall-timeline-chart');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'confirmed',
              data: data1,
              borderColor: '#fb6a4a',
              fill: false,
            },
            {
              label: 'recovered',
              data: data2,
              borderColor: '#41ab5d',
              fill: false,
            },
            {
              label: 'deaths',
              data: data3,
              borderColor: '#737373',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            gridLines: {
              display: false,
            },
            yAxes: [
              {
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 3000000,
                  stepSize: 200000,
                },
              },
            ],
          },
        },
      });
  }

}
