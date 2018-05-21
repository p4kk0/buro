import { Component } from '@angular/core';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styles: []
})
export class ArchivosComponent {

  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
  public lineChartOptions:string[] = [];

  // Pie
  public pieChartLabels:string[] = ['Procesados', 'En proceso', 'En espera'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  // PolarArea
  public polarAreaChartLabels:string[] = ['Errores', 'OK', 'Con Advertencias'];
  public polarAreaChartData:number[] = [300, 500, 100, 40];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
