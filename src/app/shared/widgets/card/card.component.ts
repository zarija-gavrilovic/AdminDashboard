import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  Highcharts = Highcharts;
  chartOptions = {}

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2,2,2,2],
        height: 60
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {//kad naslonis na tackicu tekst
        split: true,//da kad naslonis na 1 pokaze za sve te pod tom vrednoscu (sve vertikanlne)
        outside: true
      },
      legend: {//one tackice dole.
        enabled: false,
      },
      credits: {//nzm
        enabled: false,
      },
      exporting: {//menu bar za eksportovanje.
        enabled: false,
      },
      xAxis: {//ovo je valjda za x osu
        labels: {
          enabled:false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {//ovo je valjda za y osu
        labels: {
          enabled:false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      series: [{
        data: [10, 35, 100, 346, 200, 100, 50]
      }]
    };

    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    },300);
  }


}
