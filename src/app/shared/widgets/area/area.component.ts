import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  chartOptions: {};
  Highcharts = Highcharts;

  constructor() {
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Broj ljudi u bolnici'
      },
      subtitle: {
        text: 'by Zarija Gavrilovic'
      },
      tooltip: {//kad naslonis na tackicu tekst
        split: true,//da kad naslonis na 1 pokaze za sve te pod tom vrednoscu (sve vertikanlne)
        valueSuffix: 'pacijenata'//jedinica
      },
      credits: {//potpis autora
        enabled: false,
      },
      exporting: {//menu za eksportovanje
        enabled: true,
      },
      series: [{
        name: 'Cekaonica',
        data: [10, 35, 100, 346, 200, 100, 50]
      }, {
        name: 'Hospitalizovanih',
        data: [5, 20, 40, 100, 150, 150, 150]
      }, {
        name: 'Otpustenih',
        data: [1, 50, 60, 80, 20, 100, 300]
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
